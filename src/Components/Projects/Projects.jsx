import { useContext } from "react"
import { ProjectsContext } from "../../store/ProjectContext"
import ProjectCard from "./ProjectCard";
import './projects.css'
function Projects() {
    const projectsArray = useContext(ProjectsContext);

    return (     
        <div className="project-conatainer">
            <p className="my-project"> My Projects</p>
            <div className="item-list">
                  {projectsArray.map(item => {
                  return <ProjectCard
                 item={item}/>
                 
            })}
            <br />             
             <div className="show-more">
                  <button>Show More</button>
             </div>
            </div>
        </div>
    )
}

export default Projects