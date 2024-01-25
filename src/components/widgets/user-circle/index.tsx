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
        loginLink='https://darkmaterial.space',
        activeMenu='desktop',
        buttonSize='default',
        map=defaultMenuMap
    }: Props) => {
    if (activeMenu === 'desktop') return <DesktopMenu
    buttonSize={buttonSize}
    user={user}
    size={size}
    menuMap={map}
    loginLink={loginLink}
    />
    return <MobileMenu
    user={user}
    menuMap={map}
    loginLink={loginLink}
    />
}

export { UserCircle }