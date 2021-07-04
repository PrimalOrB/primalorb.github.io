import ContactIcons from "../Contact_Icons"
import MainContent from "../Main"
import Section from "../Section"
import Subtitle from "../Subtitle"
import ContactForm from '../Contact_Form'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
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
            <Section>
                <div>
                    Please find a number of contact methods listed below:
                </div>
            </Section>
            <Section>
                <ContactForm />
            </Section>
            <LogoContainer>
                <ContactIcons name="github" url="http://www.github.com/PrimalOrB" >
                    <FaGithub  />
                </ContactIcons>
                <ContactIcons name="linkedin" url="https://www.linkedin.com/in/andrew-ogilvie-725206153/" >
                    <FaLinkedin  />
                </ContactIcons>
                <ContactIcons name="stackoverflow"  url="https://stackexchange.com/users/20584120/primalorb" >
                    <FaStackOverflow  />
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