'use client'
import { Button, ButtonProps } from "@/components/ui/button"
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { User } from "firebase/auth"

type Props = {
    user?: User
    activeMenu?: 'desktop' | 'mobile'
    buttonSize?: ButtonProps['size']
}
const UserCircle = ({ user, activeMenu='desktop', buttonSize='default' }: Props) => {
    if (!user) return <Button size={buttonSize} variant='outline'>Войти</Button>
    if (activeMenu === 'desktop') return <DesktopMenu user={user} />
    return <MobileMenu user={user} />
}

export { UserCircle }