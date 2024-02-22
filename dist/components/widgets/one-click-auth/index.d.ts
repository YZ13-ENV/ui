import { User } from "firebase/auth";
type Props = {
    onUser?: (uid: string) => void;
    user?: User | null | undefined;
    members?: string[];
};
declare const OneClickAuth: ({ onUser, members, user }: Props) => import("react/jsx-runtime").JSX.Element | null;
export { OneClickAuth };
