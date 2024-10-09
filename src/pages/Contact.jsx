import { useContext } from 'react'
import Banner from "../components/Banner/Banner.jsx"
import ContactForm from "../components/ContactForm/ContactForm.jsx"
import Header from "../components/Header/Header.jsx"
import Footer from '../components/Footer/Footer.jsx'

// context
import { AppContext } from '../contexts/AppContext'

function Contact () {
    const appContext = useContext(AppContext)
    return (
        <>
        <Header/> 
        <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.svg" />
        <div className="container">
            <ContactForm />
        </div>
        <Footer />
     </>

    )
}


export default Contact