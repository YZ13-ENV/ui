import { Auth } from "firebase/auth"
import { useAuthState } from 'react-firebase-hooks/auth'

type Props = {
    auth: Auth
}
const DesktopMenu = ({ auth }: Props) => {
    const [user, loading] = useAuthState(auth)
    return (
        <div className="w-9 h-9 rounded-full bg-muted shrink-0"></div>
    )
}

export default DesktopMenu