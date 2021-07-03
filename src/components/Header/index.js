import Title from "../Title"
import Nav from "../Nav"

const Header = ( { currentPage, allPages, setCurrentPage } ) => {

    return (
        <header>
            <div className='sub-wrapper'>
                <Title setCurrentPage={ setCurrentPage }/>
                <Nav currentPage={ currentPage } allPages={ allPages } setCurrentPage={ setCurrentPage } />
            </div>
        </header>
    )
}

export default Header