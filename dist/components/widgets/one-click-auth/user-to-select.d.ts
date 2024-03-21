import { ShortUserData } from '@darkmaterial/api';
type Props = {
    isCurrent?: boolean;
    isSelected?: boolean;
    uid: string;
    noBorder?: boolean;
    onSelect?: (user: ShortUserData) => void;
};
declare const UserToSelect: ({ onSelect, isCurrent, isSelected, uid, noBorder }: Props) => import("react/jsx-runtime").JSX.Element | null;
export default UserToSelect;
