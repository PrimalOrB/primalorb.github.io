import { FaLink, FaGithub } from 'react-icons/fa'
import LogoLink from '../Logo_Link'

const Project = ( { title, description, url, image, miniImage, technologies, github } ) => {

    return (
        <article className="project-wrapper" aria-label={ title }>
            <span className="project-title">{ title }</span>
            <div className="project-tech">
            { technologies.map( ( x ) => (
                    <LogoLink link={ x.url } key={ x.name } ariaLabel={ name } ariaHidden={ true }>
                        { x.icon() }
                    </LogoLink>
            ) ) }
            </div>
            <span className="project-desc">{ description }</span>
            <div className="project-links">
                <LogoLink link={ url } key={ `${title}${url}` } addClass="project-link-icon" ariaLabel={ `deployed ${ title }` }>
                    <FaLink fill="#000" />
                </LogoLink>
                <LogoLink link={ github } key={ `${title}${github}` } addClass="project-link-icon" ariaLabel={ `${ title } github repository` }> 
                    <FaGithub fill="#000" />
                </LogoLink>
            </div>
        <img className="project-image" src={ require(`../../assets/images/${ image }`).default } />
        </article>
    )
}

export default Project