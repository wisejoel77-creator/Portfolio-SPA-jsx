//app.jsx
import { useState } from 'react'
import react from "react"
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import Header from './components/Header'
import './App.css'

//A function containing the main component of the app.
function App() {
    const [projects, setProjects] = useState([

        { id: 1, title: 'Project 1', description: 'An uber app for ride sharing.' },
        { id: 2, title: 'Project 2', description: 'A social media app for connecting people.' },
        { id: 3, title: 'Project 3', description: 'A e-commerce app for selling products online.' }
    ])

   
    const addProject = (project) => {
        setProjects(prev => [...prev,
          {id: Date.now(), ...project}])
    }

    const deleteProject = (id) => {
        setProjects(prev => prev.filter(project => project.id !== id))
    }

    return (
        <div className="app">
            <Header />
            <ProjectForm onAddProject={addProject} />
            <ProjectList projects={projects} onDeleteProject={deleteProject} />
            
        </div>
    )

}

export default App
