import { FaLink, FaGithub } from 'react-icons/fa'
import LogoLink from '../Logo_Link'


const Project = ( { title, description, url, image, technologies, github } ) => {

    return (
        <article className="project-wrapper">
            <span className="project-title">{ title }</span>
            <div className="project-tech">
            { technologies.map( ( x ) => (
                    <LogoLink link={ x.url } key={ x.name }>
                        { x.icon() }
                    </LogoLink>
            ) ) }
            </div>
            <span className="project-desc">{ description }</span>
            <div className="project-links">
                <LogoLink link={ url } key={ title } addClass="project-link-icon">
                    <FaLink fill="#000" />
                </LogoLink>
                <LogoLink link={ github } key={ title } addClass="project-link-icon">
                    <FaGithub fill="#000" />
                </LogoLink>
            </div>
        <img className="project-image" src={ require(`../../assets/images/${ image }`).default } />
        </article>
    )
}

export default Project