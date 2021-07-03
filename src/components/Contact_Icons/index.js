const ContactIcons = ( { name, url, children } ) => {
    return (
        <a href={ url } target="_blank" className="contact-links">
            { name }
            { children }
        </a>

    )
}

export default ContactIcons