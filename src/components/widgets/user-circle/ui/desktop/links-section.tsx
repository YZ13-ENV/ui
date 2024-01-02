import { DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { LinksSection as LinksSectionProps } from "@/types/common"

type Props = {
    section: LinksSectionProps
}
const LinksSection = ({ section }: Props) => {
    const isEmpty = section.items.length === 0
    const noTitle = !section.title
    if (!noTitle || !isEmpty)
    return (
        <>
            <span>{section.title}</span>
            <DropdownMenuSeparator />
            {
                section.items && section.items.map(
                    item => <DropdownMenuItem>{item.text}</DropdownMenuItem>
                )
            }
            <DropdownMenuSeparator />
        </>
    )
}

export default LinksSection