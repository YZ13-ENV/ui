'use client'
import { Button, ButtonProps } from "@/components/ui/button"
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { User } from "firebase/auth"
import { MenuMapProps } from "@/types/common"
import { defaultMenuMap } from "@/const/default-menu-map"

type Props = {
    user?: User
    activeMenu?: 'desktop' | 'mobile'
    size?: number
    loginLink?: string
    buttonSize?: ButtonProps['size']
    isSubscriber?: boolean
    map?: MenuMapProps
}
const UserCircle = ({
        user,
        size=36,
        loginLink='/login',
        activeMenu='desktop',
        buttonSize='default',
        map=defaultMenuMap
    }: Props) => {
    if (!user) return <Button size={buttonSize} variant='outline' asChild><a href={loginLink}>Войти</a></Button>
    if (activeMenu === 'desktop') return <DesktopMenu user={user} size={size} menuMap={map} />
    return <MobileMenu user={user} menuMap={map} />
}

export { UserCircle }