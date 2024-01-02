import { DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"

type Props = {
    displayName: string
    description: string
}
const UserSection = ({ description, displayName }: Props) => {
    return (
        <div className="w-full h-fit pb-4 flex flex-col justify-start">
            <span className="text-lg font-semibold text-accent-foreground">{ displayName }</span>
            <span className="text-sm font-normal text-muted-foreground">{ description }</span>
        </div>
    )
}

export default UserSection