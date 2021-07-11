const ContactIcons = ( { name, url, children, ariaLabel } ) => {
    return (
        <a href={ url } target="_blank" className="contact-links" aria-label={ ariaLabel }>
            { name }
            { children }
        </a>

    )
}

export default ContactIcons