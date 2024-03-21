import { ButtonProps } from '../../../../../components/ui/button';
import { MenuMapProps } from '../../../../../types/common';
import { User } from "firebase/auth";
type Props = {
    user?: User;
    size?: number;
    menuMap?: MenuMapProps;
    buttonSize?: ButtonProps['size'];
    loginLink?: string;
};
declare const DesktopMenu: ({ user, size, buttonSize, loginLink, menuMap }: Props) => import("react/jsx-runtime").JSX.Element;
export default DesktopMenu;
