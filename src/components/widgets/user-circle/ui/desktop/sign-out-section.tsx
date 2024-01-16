import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { SignOutSection as SignOutSectionProps } from '@/types/common'
import { BiLogOut } from 'react-icons/bi'

type Props = {
    section: SignOutSectionProps
}
const SignOutSection = ({ section }: Props) => {
    return (
        <DropdownMenuItem className='gap-2 py-2' onClick={section.action && section.action}>
            <BiLogOut />
            Выйти из профиля
        </DropdownMenuItem>
    )
}

    export default SignOutSection