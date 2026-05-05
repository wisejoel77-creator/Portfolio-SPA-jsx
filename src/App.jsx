//app.jsx
import { useState } from 'react'
import react from "react"
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import './App.css'

//A function containing the main component of the app.
function App() {
    const [projects, setProjects] = useState([])

    const addProject = (project) => {
        setProjects(prev => [...prev, project])
    }

    return (
        <div className="app">
            <Header />
            <ProjectForm onAddProject={addProject} />
            <ProjectList projects={projects} />
            
        </div>
    )

}

export default App
