'use client'
import { useMediaQuery } from "react-responsive"
import DesktopMenu from "./ui/desktop"
import MobileMenu from "./ui/mobile"

// import {} from 'react'

type Props = {
}
const UserCircle = ({  }: Props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 786px)' })
    if (!isTabletOrMobile) return <DesktopMenu />
    return <MobileMenu />
}

export { UserCircle }