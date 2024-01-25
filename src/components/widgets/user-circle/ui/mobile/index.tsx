import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { defaultMenuMap } from "@/const/default-menu-map"
import { MenuMapProps } from "@/types/common"
import { User } from "firebase/auth"
import { BiMenu } from "react-icons/bi"
import LinksSection from "./links-section"
import MembershipSection from "./membership-section"
import ProjectsSection from "./projects-section"
import SignOutSection from "./sign-out-section"
import UserSection from "./user-section"
import AuthSection from "./auth-section"

type Props = {
    user?: User
    menuMap?: MenuMapProps
    loginLink?: string
}
const MobileMenu = ({ user, loginLink='https://darkmaterial.space', menuMap=defaultMenuMap }: Props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-9 h-9 rounded-full border shrink-0 bg-background flex items-center justify-center">
                    <BiMenu size={20} />
                </div>
            </DialogTrigger>
            <DialogContent className="rounded-none w-full h-full">
                {
                    menuMap && menuMap.map((item, i) => {
                        if (item.type === 'user') {
                            if (user) return <UserSection key={i + 'mobile-item-no-wrapper'}
                            displayName={user.displayName || 'Пользователь'} description={user.email || 'Не указано'} />
                            return <AuthSection loginLink={loginLink} key={i + 'mobile-item-no-wrapper'}  />
                        }
                        if (item.type === 'links') return <LinksSection key={i + 'mobile-item-no-wrapper'} section={item} />
                        if (item.type === 'projects') return <ProjectsSection key={i + 'mobile-item-no-wrapper'} section={item} />
                        if (item.type === 'membership') return <MembershipSection key={i + 'mobile-item-no-wrapper'} section={item} />
                        if (item.type === 'sign-out' && user) return <SignOutSection key={i + 'mobile-item-no-wrapper'} section={item} />
                        if (item.type === 'wrapper') {
                            return (
                                <div key={i + '-mobile-item-wrapper'} className={item.className || ''}>
                                    {
                                        item.items && item.items.map((wrapperItem, index) => {
                                            if (wrapperItem.type === 'user') {
                                                if (user) return <UserSection key={i + '-' + index + 'mobile-item-with-wrapper'}
                                                displayName={user.displayName || 'Пользователь'} description={user.email || 'Не указано'} />
                                                return <AuthSection loginLink={loginLink} key={i + 'mobile-item-no-wrapper'}  />
                                            }
                                            if (wrapperItem.type === 'links') return <LinksSection key={i + '-' + index + 'mobile-item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'projects') return <ProjectsSection key={i + '-' + index + 'mobile-item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'membership') return <MembershipSection key={i + '-' + index + 'mobile-item-with-wrapper'} section={wrapperItem} />
                                            if (wrapperItem.type === 'sign-out' && user) return <SignOutSection key={i + '-' + index + 'mobile-item-with-wrapper'} section={wrapperItem} />
                                        })
                                    }
                                </div>
                            )
                        }
                        return null
                    })
                }
            </DialogContent>
        </Dialog>
    )
}

export default MobileMenu