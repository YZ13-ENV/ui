import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { MemberShipSection as MemberShipSectionProps } from "@/types/common"

type Props = {
    section: MemberShipSectionProps
}
const MembershipSection = ({ section }: Props) => {
    if (typeof section.state[section.activeState] === 'string') return (
        <>
            <DropdownMenuSeparator className="my-2" />
            <div className="w-full h-fit p-3 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">{section.state[section.activeState]}</span>
            </div>
        </>
    )
    return (
        <>
            <DropdownMenuSeparator className="my-2" />
            <div className="w-full p-3">
                {section.state[section.activeState] as JSX.Element}
            </div>
        </>
    )
}

export default MembershipSection