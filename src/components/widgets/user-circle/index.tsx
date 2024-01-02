'use client'
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { Auth } from "firebase/auth"
import { BiUser } from "react-icons/bi"

type Props = {
    auth?: Auth
}
const UserCircle = ({ auth }: Props) => {
    if (!auth) return <div className="w-9 h-9 rounded-full bg-muted flex items-center border justify-center"><BiUser className="text-muted-foreground" /></div>
    return (
        <>
            <div className="md:flex hidden">
                <DesktopMenu auth={auth} />
            </div>
            <div className="md:hidden flex">
                <MobileMenu auth={auth} />
            </div>
        </>
    ) 
}

export { UserCircle }