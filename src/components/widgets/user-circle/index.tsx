'use client'
import { useMediaQuery } from "react-responsive"
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"
import { Auth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'
import { Button } from "../../ui/button"

// import {} from 'react'

type Props = {
    auth: Auth
}
const UserCircle = ({ auth }: Props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 786px)' })
    const [user, loading] = useAuthState(auth)
    if (!user || !loading) return <Button variant='outline'>Войти</Button>
    if (!isTabletOrMobile) return <DesktopMenu auth={auth} />
    return <MobileMenu auth={auth} />
}

export { UserCircle }