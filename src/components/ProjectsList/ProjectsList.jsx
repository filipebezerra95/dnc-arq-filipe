import { useContext, useState, useEffect } from 'react'
import './ProjectsList.css'

//ASSETS
import LikeFilled from '../../assets/like-filled.svg'
import LikeOutline from '../../assets/Like-Outline.svg'

// COMPONENTS

import Button from '../Button/Button'

//UTILS
import { getApiData } from '../../services/apiServices'

// context
import { AppContext } from '../../contexts/AppContext'
import { json } from 'react-router-dom'

function ProjectsList() {
        const appContext = useContext(AppContext)
        const [projects, setProjects] = useState()

        useEffect(() => {
                const fetchData = async () => {
                        try {
                                const projectsResponse = await getApiData('projects')
                                setProjects(projectsResponse)
                        } catch {
                                setProjects([])

                        }
                }

                fetchData()
        }, [])

        //fav projects
        const [favProjects, setFavProject] = useState([])
        
        
        useEffect(() => {
                const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
                if (savedFavProjects) {
                     setFavProject(savedFavProjects)
                }
         }, [])

        const handleFavProjects = (id) => {
                setFavProject((prevFavProjects) => {
                        if (prevFavProjects.includes(id)) {
                                const filtedArray = prevFavProjects.filter((projectId) => projectId !== id)
                                sessionStorage.setItem('favProjects', JSON.stringify(filtedArray))
                                return prevFavProjects.filter((projectId) => projectId !== id)
                        } else {
                                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                                return [...prevFavProjects, id]
                        }
                })
        }
      
    return (
        <div className="projects-section">
              <div className="projects-hero">
                  <h2>{appContext.languages[appContext.language].projects.title}</h2>
                  <p>{appContext.languages[appContext.language].projects.subtitle}</p>
              </div>
              <div className='projects-grid'>

                {       
                        projects?
                        projects.map((project) => (
                                <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                                        <div 
                                        className='thumb tertiary-background'
                                        style={{ backgroundImage: `url(${project.thumb})`}}
                                        ></div>
                                        <h3>{project.title}</h3>
                                        <p>{project.subtitle}</p>
                                        <Button
                                                buttonStyle="unstyled"
                                                onClick={() => handleFavProjects(project.id)}
                                                >
                                                <img
                                                        src={favProjects.includes(project.id) ? LikeFilled : LikeOutline}
                                                        alt="Like"
                                                        height="20px"
                                                />
                                        </Button>
                                        
                                </div>
                        )) 
                        :
                        null
                }                   
              </div>
        </div>
    )
}

export default ProjectsList