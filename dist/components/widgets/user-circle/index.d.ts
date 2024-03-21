import { ButtonProps } from '../../../components/ui/button';
import { MenuMapProps } from '../../../types/common';
import { User } from "firebase/auth";
type Props = {
    user?: User;
    activeMenu?: 'desktop' | 'mobile';
    size?: number;
    loginLink?: string;
    buttonSize?: ButtonProps['size'];
    isSubscriber?: boolean;
    map?: MenuMapProps;
};
declare const UserCircle: ({ user, size, loginLink, activeMenu, buttonSize, map }: Props) => import("react/jsx-runtime").JSX.Element;
export { UserCircle };
