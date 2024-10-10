import { useContext } from 'react'
import { Link } from 'react-router-dom'

// ASSETS
import './Footer.css'
import BrazilIcon from '../../assets/brazil-icon.svg'
import Logo from '../../assets/dnc-logo.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'

//component
import Button from '../Button/Button'

// context
import { AppContext } from '../../contexts/AppContext'

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                          <img src={Logo} className='footer-logo' />
                          <p className="grey-1-color">{appContext.languages[appContext.language].general.footerLogoText}</p>
                          <div className='d-flex social-links'>
                               <a href='https://facebook.com'target='_blank' >
                                <img src={FacebookIcon} />
                               </a>
                               <a href='https://google.com'target='_blank' >
                               <img src={TwitterIcon} />
                               </a>
                               <a href='https://linkedin.com'target='_blank' >
                               <img src={LinkedinIcon} />
                               </a>
                               <a href='https://instagram.com'target='_blank' >
                               <img src={InstagramIcon} />
                               </a>
                          </div>   
                    </div>
                    <div className="d-flex mobile-fd-column" >
                                <div className="footer-col" >
                                    <h3>{appContext.languages[appContext.language].general.pages}</h3>
                                    <ul>
                                        <li><Link className="grey-1-color" to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                        <li><Link className="grey-1-color" to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                        <li><Link className="grey-1-color" to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                        <li><Link className="grey-1-color" to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                                    </ul>
                                </div>
                        
                     </div> 
                     <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                           <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                            <p className='grey-1-color'> (19) 99187-4342</p>

                    </div>       
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                      <p className='grey-1-color'>Copyright © DNC - 2024</p>
                      <div className="langs-area d-flex ">
                            <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                                <img src={BrazilIcon} height="29px" />
                            </Button>
                            <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                                <img src={UsaIcon} height="29px"/>
                            </Button>
                                          
                      </div>
                </div>  
            </div>
        </footer>
    )
}

export default Footer