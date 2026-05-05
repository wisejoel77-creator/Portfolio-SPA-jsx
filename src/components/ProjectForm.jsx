//ProjectForm.jsx
//A function containing the form component of the app.
function ProjectForm() {
    return (
        <div className="project-form">
            <h2>Submit a New Project</h2>
            <form className="project-form" onSubmit={(e) => {
                e.preventDefault();
                // Message to confirm that the form has been submitted and the new object has been added to the project list.
                alert('Project submitted!');
            }}>
                <label htmlFor="title">Project Title:</label>
                <input type="text" id="title" name="title" required placeholder="Enter project title here" />

                <label htmlFor="description">Project Description:</label>
                <textarea id="description" name="description" required placeholder="Enter project description here"></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProjectForm