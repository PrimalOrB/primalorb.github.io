import ContactIcons from "../Contact_Icons"
import MainContent from "../Main"
import Subtitle from "../Subtitle"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall } from 'react-icons/fi'
import LogoContainer from "../Logo_Container"

const Contact = () => {
    const title = 'contact me'
    const phone = 41698456942
    const email = "primalorb@gmail.com"

    return (
        <MainContent>
            <Subtitle title={ title }/>
            <LogoContainer>
                <ContactIcons name="github" url="http://www.github.com/PrimalOrB" >
                    <FaGithub  />
                </ContactIcons>
                <ContactIcons name="linkedin" url="https://www.linkedin.com/in/andrew-ogilvie-725206153/" >
                    <FaLinkedin  />
                </ContactIcons>
                <ContactIcons name="email" url={ `mailto://${ email }` } >
                    <AiOutlineMail  />
                </ContactIcons>
                <ContactIcons name="phone" url={ `tel://${ phone }` } >
                    <FiPhoneCall  />
                </ContactIcons>
            </LogoContainer>
        </MainContent>
    )
}

export default Contact