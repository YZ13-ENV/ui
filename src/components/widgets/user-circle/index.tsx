'use client'
import { useMediaQuery } from "react-responsive"
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { Auth } from "firebase/auth"

type Props = {
    auth?: Auth
}
const UserCircle = ({ auth }: Props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 786px)' })
    if (!auth) return <div className="w-9 h-9 rounded-full bg-muted" />
    if (!isTabletOrMobile) return <DesktopMenu auth={auth} />
    return <MobileMenu auth={auth} />
}

export { UserCircle }