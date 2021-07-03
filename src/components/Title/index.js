import { Link } from "react-router-dom"

const Title = ( { setCurrentPage } ) => {
    return (
        <div className="title">
            <Link to='/' onClick={ () => {
                    setCurrentPage( undefined )
                } }>Andrew Ogilvie
            </Link>
        </div>
    )
}

export default Title