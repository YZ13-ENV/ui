import { DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { ProjectsSection as ProjectsSectionProps } from "@/types/common"
import { MdOpenInNew } from "react-icons/md"


type Props = {
    section: ProjectsSectionProps
}
const ProjectsSection = ({ section }: Props) => {
    return (
        <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Проекты</DropdownMenuLabel>
            {
                section.projects && section.projects.map(
                    project => <DropdownMenuItem asChild key={project.key + '-menu'} >
                        <a href={project.link} className="flex px-0 items-center justify-between w-full">
                            <span className="text-base">{project.name}</span>
                            <MdOpenInNew size={18} className="ml-auto" />
                        </a>
                    </DropdownMenuItem>
                )
            }
        </>
    )
}

export default ProjectsSection