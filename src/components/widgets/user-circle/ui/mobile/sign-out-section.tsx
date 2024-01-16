import { Button } from '@/components/ui/button'
import { SignOutSection as SignOutSectionProps } from '@/types/common'
import { BiLogOut } from 'react-icons/bi'

type Props = {
    section: SignOutSectionProps
}
const SignOutSection = ({ section }: Props) => {
    return (
        <Button className='gap-2 py-2' variant='ghost' onClick={section.action && section.action}>
            <BiLogOut />
            Выйти из профиля
        </Button>
    )
}

export default SignOutSection