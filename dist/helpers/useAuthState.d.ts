import { Auth, User } from "firebase/auth";
export declare const useAuthState: (auth: Auth) => [User | null, Error | null];
