import { MenuMapProps } from '../../../../../types/common';
import { User } from "firebase/auth";
type Props = {
    user: User;
    size?: number;
    menuMap?: MenuMapProps;
};
declare const DesktopMenu: ({ user, size, menuMap }: Props) => import("react/jsx-runtime").JSX.Element;
export default DesktopMenu;
