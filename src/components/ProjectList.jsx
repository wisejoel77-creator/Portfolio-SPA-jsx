//projectList.jsx
import ProjectCard from './ProjectCard'
//A function containing the project list component of the app.

function ProjectList({ projects, onDeleteProject }) {
    return (
        <div className="project-list">
            <h2>Project List</h2>
            {projects.map((project, id) => (
                <ProjectCard key={project.id} project={project} onDeleteProject={onDeleteProject}/>
            ))}
        </div>
    )
}

export default ProjectList