import { User } from 'firebase/auth';
type Props = {
    onUser?: (uid: string) => void;
    user?: User | null | undefined;
    members?: string[];
    position?: 'absolute' | 'fixed';
};
declare const OneClickAuth: ({ position, onUser, members, user }: Props) => import("react/jsx-runtime").JSX.Element | null;
export { OneClickAuth };
