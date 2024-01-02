import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { defaultMenuMap } from "@/const/default-menu-map"
import { MenuMapProps } from "@/types/common"
import { User } from "firebase/auth"
import { BiUser } from "react-icons/bi"
import UserSection from "./user-section"
import LinksSection from "./links-section"
import ProjectsSection from "./projects-section"
import MembershipSection from "./membership-section"
import SignOutSection from "./sign-out-section"

type Props = {
    user: User
    size?: number
    menuMap?: MenuMapProps
}
const DesktopMenu = ({ user, size=36, menuMap=defaultMenuMap }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {
                    user.photoURL
                    ? <img src={user.photoURL} alt='user-profile-img'
                    style={{ width: `${size}px`, height: `${size}px` }}
                    className="w-9 h-9 rounded-full bg-muted border shrink-0" />
                    : <div style={{ width: `${size}px`, height: `${size}px` }}
                    className="w-9 h-9 rounded-full bg-muted border shrink-0 flex items-center justify-center">
                        <BiUser size={18} />
                    </div>
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-60 rounded-xl">
                { 
                    menuMap && menuMap.map((item, i) => {
                        if (item.type === 'user') return <UserSection key={i + '-item-no-wrapper'} displayName={user.displayName || 'Пользователь'} description={user.email || 'Не указано'} />
                        if (item.type === 'links') return <LinksSection key={i + '-item-no-wrapper'} section={item} />
                        if (item.type === 'projects') return <ProjectsSection key={i + '-item-no-wrapper'} section={item} />
                        if (item.type === 'membership') return <MembershipSection key={i + '-item-no-wrapper'} section={item} />
                        if (item.type === 'sign-out') return <SignOutSection key={i + '-item-no-wrapper'} section={item} />
                        if (item.type === 'wrapper') {
                            return (
                                <div key={i + '-item-wrapper'} className={item.className || ''}>
                                    {
                                        item.items && item.items.map((wrapperItem, index) => {
                                            if (wrapperItem.type === 'user') return <UserSection key={i + '-' + index + 'item-with-wrapper'} displayName={user.displayName || 'Пользователь'} description={user.email || 'Не указано'} />
                                            if (wrapperItem.type === 'links') return <LinksSection key={i + '-' + index + 'item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'projects') return <ProjectsSection key={i + '-' + index + 'item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'membership') return <MembershipSection key={i + '-' + index + 'item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'sign-out') return <SignOutSection key={i + '-' + index + 'item-with-wrapper'} section={wrapperItem} />
                                        })
                                    }
                                </div>
                            )
                        }
                        return null
                    })
                }
                {/* <div className="w-full h-48"></div>
                <DropdownMenuItem className="text-inherit flex items-center justify-center">Выйти из профиля</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel asChild>
                    <div className="w-full h-fit flex items-center justify-center">
                        <span className="text-sm font-normal text-muted-foreground">Подписка "Плюс"</span>
                    </div>
                </DropdownMenuLabel> */}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DesktopMenu