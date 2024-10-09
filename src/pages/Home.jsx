import { useContext } from 'react'
import Header from "../components/Header/header"
import Hero from "../components/Hero/hero"
import Footer from '../components/Footer/Footer'
import ProjectsList from '../components/ProjectsList/ProjectsList'

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