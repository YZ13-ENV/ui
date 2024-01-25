import { Separator } from "@/components/ui/separator"
import { MemberShipSection as MemberShipSectionProps } from "@/types/common"

type Props = {
    section: MemberShipSectionProps
}
const MembershipSection = ({ section }: Props) => {
    if (typeof section.state[section.activeState] === 'string') return (
        <>
            <Separator />
            <div className="w-full h-fit pt-5 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">{section.state[section.activeState]}</span>
            </div>
        </>
    )
    return <>
        <Separator className="my-2" />
        { section.state[section.activeState] as JSX.Element }
    </>
}

export default MembershipSection