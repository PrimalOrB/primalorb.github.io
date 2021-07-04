import ResumeRole from '../Resume_Role'

const ResumePrimary = ( { title, data } ) => {

    return (
        <section key={ `${ title }${ data.length }` } className="resume-group">
            <span className="resume-header">{ title }</span>
            { data.map( ( x ) => (
                    <div key={ x.primary }>
                        <h2 className="resume-primary">{ x.primary }</h2>
                        <ResumeRole roles={ x.roles } />
                    </div>
            ) ) }
        </section>
    )
}

export default ResumePrimary