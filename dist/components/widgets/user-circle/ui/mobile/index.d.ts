import { MenuMapProps } from '../../../../../types/common';
import { User } from "firebase/auth";
type Props = {
    user?: User;
    menuMap?: MenuMapProps;
    loginLink?: string;
};
declare const MobileMenu: ({ user, loginLink, menuMap }: Props) => import("react/jsx-runtime").JSX.Element;
export default MobileMenu;
