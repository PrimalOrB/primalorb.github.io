const LogoLink = ( { children, link } ) => {
    return (
        <a href={link} target="_blank" className="logo-link">
            { children }
        </a>
    )
}

export default LogoLink