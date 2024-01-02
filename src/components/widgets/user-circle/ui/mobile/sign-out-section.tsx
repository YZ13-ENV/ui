import { Button } from '@/components/ui/button'
import { SignOutSection as SignOutSectionProps } from '@/types/common'

type Props = {
    section: SignOutSectionProps
}
const SignOutSection = ({ section }: Props) => {
    return (
        <Button className='flex items-center justify-center py-2' variant='ghost' onClick={section.action && section.action}>Выйти из профиля</Button>
    )
}

export default SignOutSection