import { Button } from "@/components/ui/button";
import { MenuMapProps } from "@/types/common";
import { projects } from "./projects";

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
                items: []
            },
        ]
    },
    {
        type: 'wrapper',
        className: 'flex flex-col w-full h-fit mt-auto',
        items: [
            {
                type: 'projects',
                projects: projects
            },
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