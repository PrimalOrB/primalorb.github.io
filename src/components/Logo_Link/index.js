const LogoLink = ( { children, link, addClass, ariaLabel, ariaHidden } ) => {

    return (
        <a href={ link } target="_blank" className={ `${ addClass ? addClass : 'logo-link' }` } aria-label={ ariaLabel } aria-hidden={ ariaHidden ? true : false }>
            { children }
        </a>
    )
}

export default LogoLink