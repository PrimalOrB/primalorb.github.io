const ResumeTask = ( { tasks } ) => {

    return (
        <>
        <ul className="role-tasks">
           { tasks.map( ( x, i ) => (
                    <li key={ `${x}${i}` }>{ x }</li>
            ) ) }
        </ul>
        </>
    )
}

export default ResumeTask