import { Link } from "react-router-dom"

const Nav = ( { currentPage, allPages, setCurrentPage } ) => {
    return (
        <nav aria-label="Navigation Menu" role="menubar">
            { allPages.map( ( page ) => ( 
            <Link 
                to={ `/${ page }` }
                className= { `nav-link${ currentPage === page ? ` nav-active` : "" }`  }
                role="menuitem" 
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