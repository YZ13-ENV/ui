'use client'
import { notifications } from 'api';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import type { DocNotification } from 'api';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { PiBellBold } from "react-icons/pi";
import Notification from './ui/notification';
import { Button } from '@/components/ui/button';
import { io } from 'socket.io-client';
import { api_host } from '@/const/host';
import { Separator } from '@/components/ui/separator';
import { Auth } from 'firebase/auth';

type Props = {
  auth: Auth
}
const Notifications = ({ auth }: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const [user] = useAuthState(auth)
    const [received, setReceived] = useState<DocNotification[]>([])
    const hasNoViewed = received.filter(notification => !notification.isViewed)
    const clear = () => {
      if (received.length && user) {
        received.forEach(item =>
          notifications.delete(user.uid, item.doc_id)
        )
      }
    }
    useEffect(() => {
      const socket = io(api_host)
      socket.on('connect', () => {
        console.log('Connected to notifications');
        if (user) {
          // console.log(user.uid)
          socket.emit('notifications', user.uid);
        }
      });
      socket.on('notifications', (data: DocNotification[]) => {
        setReceived(data)
        // console.log('received notifications', data);
      });
      socket.on('exception', (data) => {
        console.log('event', data);
      });
      socket.on('disconnect', () => {
        console.log('Disconnected');
      });
      return () => {
        socket.close()
      }
    },[user?.uid])
    if (!user || !auth) return null
    return (
      <Popover open={user ? open : false} onOpenChange={state => setOpen(state)}>
        <PopoverTrigger className='relative w-9 h-9 rounded-full flex items-center justify-center border bg-background'>
          { hasNoViewed.length !== 0 && <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary" /> }
          <PiBellBold size={16} />
        </PopoverTrigger>
        <PopoverContent className='w-96 p-0 flex flex-col bg-background'>
          <div className="w-full border-b p-3 flex items-center">
            <div className="w-fit h-fit flex items-center gap-4">
              <span className='text-sm text-muted-foreground'>Входящие</span>
              {/* <span className='text-sm text-muted-foreground'>Комментарии</span> */}
            </div>
          </div>
          <div className="w-full h-full flex flex-col">
            {
              !received.length
              ? <div className='w-full h-64 flex items-center justify-center'>
                <span className='text-center text-sm text-muted-foreground'>Нет новых уведомлений</span>
              </div>
              : received.map(
                (notification, i) => <>
                  <Notification key={notification.doc_id} notification={notification} />
                  { i !== received.length - 1 && <Separator key={notification.doc_id + '-separator'} /> }
                </>
              )
            }
          </div>
          <div className="w-full h-fit p-2 border-t flex items-center justify-center">
            <Button size='sm' onClick={clear} variant='ghost'>Очистить</Button>
          </div>
        </PopoverContent>
      </Popover>
    )
}

export { Notifications }