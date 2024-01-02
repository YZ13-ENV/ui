'use client'
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { User } from "firebase/auth"
import { BiUser } from "react-icons/bi"

type Props = {
    user?: User
}
const UserCircle = ({ user }: Props) => {
    if (!user) return <div className="w-9 h-9 rounded-full bg-muted flex items-center border justify-center"><BiUser className="text-muted-foreground" /></div>
    return (
        <>
            <div className="md:flex hidden">
                <DesktopMenu user={user} />
            </div>
            <div className="md:hidden flex">
                <MobileMenu user={user} />
            </div>
        </>
    ) 
}

export { UserCircle }