import { MenuMapProps } from '../../../../../types/common';
import { User } from "firebase/auth";
type Props = {
    user: User;
    size?: number;
    menuMap?: MenuMapProps;
};
declare const MobileMenu: ({ user, menuMap }: Props) => import("react/jsx-runtime").JSX.Element;
export default MobileMenu;
