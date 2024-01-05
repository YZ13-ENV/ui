import { MdGridView } from "react-icons/md"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { projects } from "@/const/projects"
import { Button } from "../ui/button"
import { getCookies } from "@/helpers/cookie"
import { useEffect, useState } from "react"

const ProjectsGrid = () => {
    const [cookies, setCookies] = useState<{ [key: string]: string } | null>(null)
    const themeCookie = cookies ? cookies['theme'] as 'light' | 'dark' : 'dark'
    useEffect(() => {
        if (typeof document !== 'undefined') {
            const takenCookies = getCookies(document)
            setCookies(takenCookies)
        }
    },[typeof document])
    return (
        <Popover>
            <PopoverTrigger asChild className="rounded-full border w-9 h-9 flex items-center bg-background justify-center">
                <Button size='icon' variant="ghost">
                    <MdGridView size={20} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="projects-grid">
                {
                    projects.map(project => <a href={project.link} key={project.key} className="w-full h-full flex flex-col items-center justify-center gap-2 rounded-md hover:bg-muted p-1">
                        <div className="w-7 h-7 relative">
                            <img src={project.themedIcon ? project.themedIcon[themeCookie] : project.icon} className="w-full h-full" alt="project-icon" />
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
