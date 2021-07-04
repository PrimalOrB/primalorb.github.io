import ResumeTask from '../Resume_Task'

const ResumeRole = ( { roles } ) => {

    return (
        <section>
            { roles.map( ( x, i ) => (
                    <div key={ i } className="resume-role-desc">
                        <div>
                            <span className="resume-role">{ x.role }</span>
                            { x.from && <span className="resume-dates">( { x.from } - { x.to } )</span> }
                            </div>
                        <ResumeTask tasks={ x.tasks } />
                    </div>
            ) ) }
        </section>
    )
}

export default ResumeRole