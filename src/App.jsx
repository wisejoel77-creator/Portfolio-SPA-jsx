//app.jsx
import { useState } from 'react'
import react from "react"
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import ProjectCard from './components/ProjectCard'
import Header from './components/Header'
import './App.css'

//A function containing the main component of the app.
function App() {
    const [projects, setProjects] = useState([])

    return (
        <div className="app">
            <Header />
            <ProjectForm />
            <ProjectList />
            <ProjectCard />
        </div>
    )

}

export default App
