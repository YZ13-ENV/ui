/// <reference types="react" />
import { StaticImageData } from "next/image";
type Props = {
    size?: number;
    isSubscriber?: boolean;
    src: string | StaticImageData | null;
    className?: string;
};
declare const _default: import("react").MemoExoticComponent<({ size, isSubscriber, src, className }: Props) => JSX.Element>;
export default _default;
