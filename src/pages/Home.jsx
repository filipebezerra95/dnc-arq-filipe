import { useContext } from 'react'
import Header from "../components/Header/Header.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Footer from '../components/Footer/Footer.jsx'
import ProjectsList from '../components/ProjectsList/ProjectsList.jsx'

// context
import { AppContext } from '../contexts/AppContext'

function Home() {
    const appContext = useContext(AppContext)
    return (
        <>
           <Header/> 
           <div className="container">
           <Hero />
           <ProjectsList />
           </div>
           
           <Footer />
        </>
    )
}

export default Home