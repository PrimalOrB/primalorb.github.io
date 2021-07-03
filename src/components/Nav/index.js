import { Link } from "react-router-dom"

const Nav = ( { currentPage, allPages, setCurrentPage } ) => {
    return (
        <nav role="nav">
            { allPages.map( ( page ) => ( 
            <Link 
                to={ `/${ page }` }
                className= { `nav-link ${ currentPage === page ? `nav-active` : undefined }`  }
                key={ page }
                onClick={ () => {
                    setCurrentPage( page )
                } }
                >{ page }
            </Link> 
            ) ) }
        </nav>
    )
}

export default Nav