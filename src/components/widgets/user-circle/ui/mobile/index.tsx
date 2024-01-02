import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { projects } from "@/const/projects"
import { useAuthState } from "@/helpers/useAuthState"
import { Auth } from "firebase/auth"
import { BiMenu } from "react-icons/bi"
import { MdOpenInNew } from "react-icons/md"

type Props = {
    auth: Auth
}
const MobileMenu = ({ auth }: Props) => {
    const [user, loading] = useAuthState(auth)
    const getSignOut = async() => {
        await auth?.signOut()
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-9 h-9 rounded-full border shrink-0 flex items-center justify-center">
                    <BiMenu size={20} />
                </div>
            </DialogTrigger>
            <DialogContent className="rounded-none w-full h-full">
                <div className="flex flex-col w-full h-fit">
                    <div className="w-full h-fit pb-4 flex flex-col justify-center">
                        <span className="text-lg font-semibold text-accent-foreground">{ user?.displayName }</span>
                        <span className="text-sm text-muted-foreground">{ user?.email }</span>
                    </div>
                    <Separator />
                    <div className="w-full h-fit flex flex-col py-6">

                    </div>
                    {/* <Button variant='ghost'></Button> */}
                </div>
                <div className="flex flex-col w-full h-fit mt-auto">
                    <div className="w-full h-fit py-6">
                        <Separator />
                        <div className="flex flex-col w-full h-fit my-4 gap-2">
                            <span className="font-medium">Другие проекты</span>
                            {
                                projects.filter((_, i) => i < 3)
                                .map(project => 
                                    <Button asChild key={project.key + '-menu'} variant='ghost' className="flex px-0 items-center justify-between">
                                        <a href={project.link}>
                                            <span className="text-base">{project.name}</span>
                                            <MdOpenInNew size={18} />
                                        </a>
                                    </Button>
                                )
                            }
                        </div>
                        <Separator />
                    </div>
                    <div className="w-full h-fit py-2">
                        <Button onClick={getSignOut} className="w-full text-inherit" variant='outline' size='lg'>Выйти из профиля</Button>
                    </div>
                    <Separator />
                    <div className="w-full h-fit pt-5 flex items-center justify-center">
                        <span className="text-sm text-muted-foreground">Подписка "Плюс"</span>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MobileMenu