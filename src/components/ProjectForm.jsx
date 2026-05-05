//ProjectForm.jsx
import { useState } from 'react'
//A function containing the form component of the app.

function ProjectForm({ onAddProject }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const[successMessage, setSuccessMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddProject({ title, description })
        setTitle('')
        setDescription('')
        setSuccessMessage('Project submitted successfully!')

        setTimeout(() => {
            setSuccessMessage('')
        }, 3000)
    }
    return (
        <div className="project-form">
            {successMessage && <p className="success">{successMessage}</p>}
            <h2>Submit a New Project</h2>
            <form className="project-form" onSubmit={handleSubmit}>
                

                {/* Form fields for project title and description, with placeholders to guide the user. */}
                <label htmlFor="title">Project Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Enter project title here" />

                <label htmlFor="description">Project Description:</label>
                <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required placeholder="Enter project description here"></textarea>

{/* Submit button to submit the form. */}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ProjectForm