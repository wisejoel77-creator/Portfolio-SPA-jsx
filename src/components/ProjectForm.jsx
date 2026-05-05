//ProjectForm.jsx
//A function containing the form component of the app.
function ProjectForm() {
    return (
        <div className="project-form">
            <h2>Submit a New Project</h2>
            <form>
                <label htmlFor="title">Project Title:</label>
                <input type="text" id="title" name="title" required />

                <label htmlFor="description">Project Description:</label>
                <textarea id="description" name="description" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProjectForm