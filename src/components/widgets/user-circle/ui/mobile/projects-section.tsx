import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProjectsSection as ProjectsSectionProps } from "@/types/common"
import { MdOpenInNew } from "react-icons/md"


type Props = {
    section: ProjectsSectionProps
}
const ProjectsSection = ({ section }: Props) => {
    return (
        <>
            <Separator />
            <div className="w-full h-fit flex flex-col my-4">
                <span className="text-base font-medium mb-2">Проекты</span>
                {
                    section.projects && section.projects.map(
                        project => <Button asChild key={project.key + '-menu'} variant='ghost' >
                            <a href={project.link} className="flex px-0 items-center justify-between w-full">
                                <span className="text-base">{project.name}</span>
                                <MdOpenInNew size={18} className="ml-auto" />
                            </a>
                        </Button>
                    )
                }
            </div>
            <Separator />
        </>
    )
}

export default ProjectsSection