import { DocDefaultProject, default_api } from "@darkmaterial/api"
import { useEffect, useState } from "react"
import { MdGridView } from "react-icons/md"
import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"

const ProjectsGrid = () => {
    const [projects, setProjects] = useState<DocDefaultProject[]>([])
    useEffect(() => {
        default_api.all()
            .then(data => setProjects(data))
    }, [])
    return (
        <Popover>
            <PopoverTrigger asChild className="rounded-full border w-9 h-9 flex items-center bg-background justify-center">
                <Button size='icon' variant="ghost">
                    <MdGridView size={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="projects-grid">
                {
                    projects.map(project => <a href={project.link} key={"popover-" + project.doc_id} className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1">
                        <div className="w-7 h-7 relative">
                            <img src={project.iconUrl} className="w-full h-full" alt="project-icon" />
                        </div>
                        <span className="text-xs text-center">{project.name}</span>
                    </a>
                    )
                }
            </PopoverContent>
        </Popover>
    )
}

export default ProjectsGrid
