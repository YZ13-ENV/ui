import { Button } from "@/components/ui/button";
import { MenuMapProps } from "@/types/common";
import { BiCog } from "react-icons/bi";

export const defaultMenuMap: MenuMapProps = [
    {
        type: 'wrapper',
        className: 'flex flex-col w-full h-fit',
        items: [
            {
                type: 'user'
            },
            {
                type: 'links',
                items: [
                    {
                        icon: BiCog,
                        text: 'Настройки',
                        link: 'https://id.darkmaterial.space/'
                    }
                ]
            },
        ]
    },
    {
        type: 'wrapper',
        className: 'flex flex-col w-full h-fit mt-auto',
        items: [
            {
                type: 'sign-out'
            },
            {
                type: 'membership',
                activeState: 'inactive',
                state: {
                    active: 'У вас уже есть Плюс',
                    inactive: <Button variant='outline' className="w-full"><a href='/plus'>Получить Плюс</a></Button>
                }
            }
        ]
    }

]