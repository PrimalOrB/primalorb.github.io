import MainContent from "../Main"
import Subtitle from "../Subtitle"
import { GrMysql } from 'react-icons/gr'
import Project from "../Project"
import LogoEX from "../Logo_Express"
import LogoThree from '../Logo_Three'
import LogoHDBS from '../Logo_hdbs'
import { FaNodeJs, FaCss3Alt, FaRegClock, FaHtml5, FaReact } from 'react-icons/fa'
import { BsLock } from 'react-icons/bs'
import { DiJqueryLogo, DiJavascript1, DiJqueryUiLogo, DiMongodb } from 'react-icons/di'


import ProjectContainer from "../Project_Container"
import Section from "../Section"

const Work = () => {
    const title = 'my work'

    const projects = [
        { title: 'myBid', url: 'https://mybid-live.herokuapp.com/', image: 'auction.PNG', description: 'A collaboratively developed MERN SPA auction platform with social features allowing anyone to create and bid on auctions.', github: 'https://github.com/PrimalOrB/myBid', technologies:[
            { key:1, name: 'MongoDB', icon: DiMongodb, url: 'https://www.mongodb.com/' },
            { key:2, name: 'express', icon: LogoEX , url: 'https://expressjs.com/' },
            { key:3, name: 'React', icon: FaReact, url: 'https://reactjs.org/' },
            { key:4, name: 'Node.js', icon: FaNodeJs , url: 'https://nodejs.org/en/' },
        ] },

        { title: 'Portfolio', url: 'https://primalorb.github.io/', image: 'portfolio-min.png', description: 'Single Page Application (SPA) React website to showcase my skills, projects, and contact methods', github: 'https://github.com/PrimalOrB/primalorb.github.io', technologies:[
            { key:1, name: 'React', icon: FaReact, url: 'https://reactjs.org/' },
            { key:4, name: 'threejs fiber', icon: LogoThree , url: 'http://threejs.org/' },
            { key:2, name: 'JavaScript', icon: DiJavascript1 , url: 'https://en.wikipedia.org/wiki/JavaScript' },
            { key:3, name: 'css', icon: FaCss3Alt , url: 'https://en.wikipedia.org/wiki/CSS' },
        ] },

        { title: 'Tech Blog', url: 'https://primalorb-tech-blog.herokuapp.com/', image: 'tech.gif', description: 'A blog site utilizing Node.js, express.js, and mySQL allowing users to create accounts, create posts, and comment on the posts of other users. Deployed on Heroku, and using threejs for an interactive background.', github: 'https://github.com/PrimalOrB/tech_blog', technologies:[
            { key:1, name: 'Node.js', icon: FaNodeJs , url: 'https://nodejs.org/en/' },
            { key:2, name: 'mySQL', icon: GrMysql , url: 'https://www.mysql.com/' },
            { key:3, name: 'express', icon: LogoEX , url: 'https://expressjs.com/' },
            { key:4, name: 'threejs', icon: LogoThree , url: 'http://threejs.org/' },
            { key:4, name: 'bcrypt', icon: BsLock , url: 'https://www.npmjs.com/package/bcrypt' },
        ] },

        { title: 'Gamer Match', url: 'https://damp-tor-80298.herokuapp.com/', image: 'gamermatch-min.PNG', description: 'A collaboratively developed application. Gamers can use their steam credentials to log in and find other players who interact with similar games. Developed using Node.js, handlebars.js, sequelize.js, and threejs', github: 'https://github.com/PrimalOrB/gamer-match', technologies:[
            { key:1, name: 'Node.js', icon: FaNodeJs, url: 'https://nodejs.org/en/' },
            { key:2, name: 'mySQL', icon: GrMysql , url: 'https://www.mysql.com/' },
            { key:3, name: 'express', icon: LogoEX , url: 'https://expressjs.com/' },
            { key:4, name: 'handlebars', icon: LogoHDBS , url: 'https://handlebarsjs.com/' },
            { key:5, name: 'threejs', icon: LogoThree , url: 'http://threejs.org/' },
        ] },
        
        { title: 'Weather App', url: 'https://primalorb.github.io/weather_dashboard/', image: 'weather-min.PNG', description: 'A weather app utilizing the OpenWeather API to serve location specific weather data to the user. Forecase data is clearly visualized for the user, and previous location searches are stored for retrieval', github: 'https://github.com/PrimalOrB/weather_dashboard', technologies:[
            { key:1, name: 'jQuery', icon: DiJqueryLogo, url: 'https://jquery.com/' },
            { key:2, name: 'JavaScript', icon: DiJavascript1 , url: 'https://en.wikipedia.org/wiki/JavaScript' },
            { key:3, name: 'css', icon: FaCss3Alt , url: 'https://en.wikipedia.org/wiki/CSS' },
            { key:4, name: 'moment', icon: FaRegClock , url: 'https://momentjs.com/' },
            { key:5, name: 'jQueryui', icon: DiJqueryUiLogo , url: 'https://jqueryui.com/' },
        ] },

        { title: 'Drinkspo', url: 'https://primalorb.github.io/find_your_drink/', image: 'drinkspo-min.PNG', description: 'Collaborative front-end project where users can find drink ideas and fun trivia to go along with it. Users can generate scheduled events / reminders so they can send emails to share with their friends.', github: 'https://github.com/PrimalOrB/find_your_drink', technologies:[
            { key:1, name: 'jQuery', icon: DiJqueryLogo, url: 'https://jquery.com/' },
            { key:2, name: 'JavaScript', icon: DiJavascript1 , url: 'https://en.wikipedia.org/wiki/JavaScript' },
            { key:3, name: 'css', icon: FaCss3Alt , url: 'https://en.wikipedia.org/wiki/CSS' },
            { key:4, name: 'moment', icon: FaRegClock , url: 'https://momentjs.com/' },
            { key:5, name: 'jQueryui', icon: DiJqueryUiLogo , url: 'https://jqueryui.com/' },
        ] },    
    ]


    return (
        <MainContent>
            <Subtitle title={ title }/>
            <Section wrap='wrap'>
                { projects.map( ( project ) => (
                    <Project title={ project.title} description={ project.description } url={ project.url } image={ project.image } technologies={ project.technologies } github={ project.github } key={ project.title }/>
                ) ) }
            </Section>
        </MainContent>
    )
}

export default Work