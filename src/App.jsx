//app.jsx
import { useState } from 'react'
import react from "react"
import ProjectForm from './components/ProjectForm'
import ProjectList from './components/ProjectList'
import ProjectData from './components/ProjectData'

//A function containing the main component of the app.
function App() {
    const [projects, setProjects] = useState([])

    return (
        <div className="app">
          <Header />
            <h1>Project Management App</h1>
            <ProjectForm />
            <ProjectList />
            <ProjectData />
        </div>
    )

}

export default App
