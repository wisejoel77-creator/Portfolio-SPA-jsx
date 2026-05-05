//projectList.jsx
//A function containing the project list component of the app.

import ProjectCard from './ProjectCard'
function ProjectList({ projects }) {
    return (
        <div className="project-list">
            <h2>Project List</h2>
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    )
}

export default ProjectList