import { ButtonProps } from '../../../components/ui/button';
import { User } from "firebase/auth";
type Props = {
    user?: User;
    activeMenu?: 'desktop' | 'mobile';
    buttonSize?: ButtonProps['size'];
};
declare const UserCircle: ({ user, activeMenu, buttonSize }: Props) => import("react/jsx-runtime").JSX.Element;
export { UserCircle };
