//ProjectCard.jsx
//A function containing the project card component of the app.
function ProjectCard({ project, onDeleteProject }) {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => onDeleteProject(project.id)}>
                Delete Project
            </button>
        </div>
    )
}

export default ProjectCard