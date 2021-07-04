const LogoLink = ( { children, link, addClass } ) => {
    return (
        <a href={ link } target="_blank" className={ `${ addClass ? addClass : 'logo-link' }` }>
            { children }
        </a>
    )
}

export default LogoLink