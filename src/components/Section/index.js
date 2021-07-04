const Section = ( { children, wrap } ) => {
    return (
        <section className={ `section-container ${ wrap } `} >
            { children }
        </section>
    )
}

export default Section