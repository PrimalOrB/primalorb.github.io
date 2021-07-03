import Title from "../Title"
import Nav from "../Nav"

const Header = ( { currentPage, allPages, setCurrentPage } ) => {

    return (
        <header>
            <div className='sub-wrapper'>
                <Title />
                <Nav currentPage={ currentPage } allPages={ allPages } setCurrentPage={ setCurrentPage } />
            </div>
        </header>
    )
}

export default Header