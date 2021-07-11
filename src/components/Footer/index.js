import ContactIcons from "../Contact_Icons"
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {

    function year(){
        return new Date().getFullYear()
    }

    return (
        <footer aria-label="footer">
            <div className='sub-wrapper'>
                <div id="footer-icons">
                <ContactIcons name="" url="http://www.github.com/PrimalOrB" ariaLabel="github">
                    <FaGithub  />
                </ContactIcons>
                <ContactIcons name="" url="https://www.linkedin.com/in/andrew-ogilvie-725206153/"  ariaLabel="linkedin">
                    <FaLinkedin  />
                </ContactIcons>
                <ContactIcons name="" url="https://stackexchange.com/users/20584120/primalorb"  ariaLabel="stack overflow">
                    <FaStackOverflow  />
                </ContactIcons>
                </div>
                <p>&copy; { year() } Andrew Ogilvie</p>
            </div>
        </footer>
    )
}

export default Footer