import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { SignOutSection as SignOutSectionProps } from '@/types/common'

type Props = {
    section: SignOutSectionProps
}
const SignOutSection = ({ section }: Props) => {
    return (
        <DropdownMenuItem className='flex items-center justify-center py-2' onClick={section.action && section.action}>Выйти из профиля</DropdownMenuItem>
    )
}

export default SignOutSection