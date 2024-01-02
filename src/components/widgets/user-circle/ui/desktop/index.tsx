import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { User } from "firebase/auth"

type Props = {
    user: User
}
const DesktopMenu = ({ user }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="w-9 h-9 rounded-full bg-muted border shrink-0"></div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-4 w-60 rounded-xl">
                <DropdownMenuLabel>
                    <div className="w-full h-fit pb-4 flex flex-col justify-start">
                        <span className="text-lg font-semibold text-accent-foreground">{ user?.displayName }</span>
                        <span className="text-sm font-normal text-muted-foreground">{ user?.email }</span>
                    </div>
                </DropdownMenuLabel>
                <div className="w-full h-48"></div>
                <DropdownMenuItem className="text-inherit flex items-center justify-center">Выйти из профиля</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel asChild>
                    <div className="w-full h-fit flex items-center justify-center">
                        <span className="text-sm font-normal text-muted-foreground">Подписка "Плюс"</span>
                    </div>
                </DropdownMenuLabel>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DesktopMenu