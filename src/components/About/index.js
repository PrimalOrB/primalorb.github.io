import MainContent from "../Main"
import Subtitle from "../Subtitle"
import ProfilePhoto from '../ProfilePhoto'
import Section from "../Section"
import LogoThree from '../Logo_Three'
import LogoContainer from '../Logo_Container'
import LogoLink from '../Logo_Link'
import { GrMysql } from 'react-icons/gr'
import { FaGithub, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { DiMongodb, DiJavascript1, DiJqueryLogo, DiGit, DiJqueryUiLogo } from 'react-icons/di'

const About = () => {
    const title = 'about me'
    const title2 = 'my technologies'
    return (
        <MainContent>
            <Subtitle title={ title }/>
            <Section>
                <div>Welcome to my portfolio and thank you for visiting. My name is Andrew Ogilvie and this is my platform to showcase the knowledge I have applied, and to make meaningful networking connections with my visitors.
                Please visit my work examples, experience history, and find my contact information and professional connection methods.</div>
                <ProfilePhoto />
            </Section>
            <Subtitle title={ title2 }/>
            <LogoContainer>
                <LogoLink link="http://threejs.org">
                    <LogoThree />
                </LogoLink>
                <LogoLink link="https://reactjs.org/">
                    <FaReact />
                </LogoLink>
                <LogoLink link="https://github.com/">
                    <FaGithub  />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/HTML5">
                    <FaHtml5 />
                </LogoLink>
                <LogoLink link="https://nodejs.org/en/">
                    <FaNodeJs />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/CSS">
                    <FaCss3Alt />
                </LogoLink>
                <LogoLink link="https://getbootstrap.com/">
                    <FaBootstrap />
                </LogoLink>
                <LogoLink link="https://www.mysql.com/">
                    <GrMysql />
                </LogoLink>
                <LogoLink link="https://www.mongodb.com/">
                    <DiMongodb />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/JavaScript">
                    <DiJavascript1 />
                </LogoLink>
                <LogoLink link="https://jquery.com/">
                    <DiJqueryLogo />
                </LogoLink>
                <LogoLink link="https://jqueryui.com/">
                    <DiJqueryUiLogo />
                </LogoLink>
                <LogoLink link="https://git-scm.com/">
                    <DiGit />
                </LogoLink>
                
            </LogoContainer>
        </MainContent>
    )
}

export default About