'use client'

import type { DocNotification } from "api"
import { DateTime } from "luxon"
import { useInViewport } from 'ahooks'
import { memo, useEffect, useRef } from "react"
import { notifications } from "api"
import { Button } from "@/components/ui/button"
import { BiTrashAlt } from "react-icons/bi"
import Link from "next/link"

type Props = {
  notification: DocNotification
}
const Notification = ({ notification }: Props) => {
    const ref = useRef(null)
    const [isInView] = useInViewport(ref)
    const { fromSeconds } = DateTime
    const formattedDate = fromSeconds(notification.createdAt)
    useEffect(() => {
      if (!notification.isViewed && isInView)
      notifications.patch(notification.receiver, notification.doc_id, { isViewed: true })
    },[notification.isViewed, isInView])
    return (
      <div ref={ref} className="w-full h-fit flex group cursor-pointer hover:bg-card transition-colors">
        {
          notification.link
          ? <Link className="w-fit h-fit flex items-center" href={notification.link}>
            <div className="p-4">
              <div className="w-9 h-9 rounded-full bg-muted"></div>
            </div>
            <div className="w-full h-fit flex flex-col py-4">
              <span className='text-sm'>{notification.message}</span>
              <span className="text-xs text-muted-foreground">{formattedDate.setLocale('ru').toRelative()}</span>
            </div>
          </Link>
          : <div className="w-fit h-fit flex items-center">
            <div className="p-4">
              <div className="w-9 h-9 rounded-full bg-muted"></div>
            </div>
            <div className="w-full h-fit flex flex-col py-4">
              <span className='text-sm'>{notification.message}</span>
              <span className="text-xs text-muted-foreground">{formattedDate.setLocale('ru').toRelative()}</span>
            </div>
          </div>
        }
        <div className="p-4">
          <Button size='icon' variant='ghost' className="opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
          onClick={() => notifications.delete(notification.receiver, notification.doc_id)}><BiTrashAlt /></Button>
        </div>
      </div>
    )
}

export default memo(Notification)