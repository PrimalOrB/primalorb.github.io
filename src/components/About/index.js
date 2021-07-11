import MainContent from "../Main"
import Subtitle from "../Subtitle"
import ProfilePhoto from '../ProfilePhoto'
import Section from "../Section"
import LogoThree from '../Logo_Three'
import LogoMaya from '../Logo_Maya'
import LogoHDBS from '../Logo_hdbs'
import LogoEX from '../Logo_Express'
import LogoContainer from '../Logo_Container'
import LogoLink from '../Logo_Link'
import { GrMysql } from 'react-icons/gr'
import { FaGithub, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { DiMongodb, DiJavascript1, DiJqueryLogo, DiGit, DiJqueryUiLogo } from 'react-icons/di'
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremiere, SiMicrosoftexcel, SiGraphql } from 'react-icons/si'

const About = () => {
    const title = 'about me'
    const title2 = 'my technologies'
    return (
        <MainContent>
            <Subtitle title={ title }/>
            <Section wrap="nowrap">
                <div>Welcome to my portfolio and thank you for visiting. My name is Andrew Ogilvie and this is my platform to showcase the knowledge I have applied, and to make meaningful networking connections with my visitors.
                Please visit my work examples, experience history, and find my contact information and professional connection methods.</div>
                <ProfilePhoto />
            </Section>
            <Subtitle title={ title2 }/>
            <LogoContainer>
                <LogoLink link="http://threejs.org" ariaLabel="threejs">
                    <LogoThree />
                </LogoLink>
                <LogoLink link="https://reactjs.org/" ariaLabel="reactjs">
                    <FaReact />
                </LogoLink>
                <LogoLink link="https://graphql.org/" ariaLabel="graphql">
                    <SiGraphql />
                </LogoLink>
                <LogoLink link="https://github.com/" ariaLabel="github">
                    <FaGithub  />
                </LogoLink>
                <LogoLink link="https://expressjs.com/" ariaLabel="expressjs">
                    <LogoEX />
                </LogoLink>
                <LogoLink link="https://handlebarsjs.com/" ariaLabel="handlebarsjs">
                    <LogoHDBS />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/HTML5" ariaLabel="html5">
                    <FaHtml5 />
                </LogoLink>
                <LogoLink link="https://nodejs.org/en/" ariaLabel="node js">
                    <FaNodeJs />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/CSS" ariaLabel="css">
                    <FaCss3Alt />
                </LogoLink>
                <LogoLink link="https://getbootstrap.com/" ariaLabel="bootstrap">
                    <FaBootstrap />
                </LogoLink>
                <LogoLink link="https://www.mysql.com/" ariaLabel="mysql">
                    <GrMysql />
                </LogoLink>
                <LogoLink link="https://www.mongodb.com/" ariaLabel="mongodb">
                    <DiMongodb />
                </LogoLink>
                <LogoLink link="https://en.wikipedia.org/wiki/JavaScript" ariaLabel="javascript">
                    <DiJavascript1 />
                </LogoLink>
                <LogoLink link="https://jquery.com/" ariaLabel="jqeuery">
                    <DiJqueryLogo />
                </LogoLink>
                <LogoLink link="https://jqueryui.com/" ariaLabel="jquery ui">
                    <DiJqueryUiLogo />
                </LogoLink>
                <LogoLink link="https://git-scm.com/" ariaLabel="git">
                    <DiGit />
                </LogoLink>
                <LogoLink link="https://www.adobe.com/ca/products/photoshopfamily.html" ariaLabel="photoshop">
                    <SiAdobephotoshop />
                </LogoLink>
                <LogoLink link="https://www.adobe.com/ca/products/illustrator.html" ariaLabel="illustrator">
                    <SiAdobeillustrator />
                </LogoLink>
                <LogoLink link="https://www.adobe.com/ca/products/aftereffects.html" ariaLabel="after effects">
                    <SiAdobeaftereffects />
                </LogoLink>
                <LogoLink link="https://www.adobe.com/ca/products/premiere.html" ariaLabel="premier">
                    <SiAdobepremiere />
                </LogoLink>
                <LogoLink link="https://www.autodesk.com/products/maya/overview" ariaLabel="maya">
                    <LogoMaya />
                </LogoLink>
            </LogoContainer>
        </MainContent>
    )
}

export default About