import { Separator } from "@/components/ui/separator"
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
            <Separator className="my-2" />
            {
                section.items && section.items.map(
                    item => <a href={item.link} className="flex items-center py-2 justify-start gap-2">
                        { item.icon && item.icon({}) }
                        { item.text }
                    </a>
                )
            }
        </>
    )
}

export default LinksSection