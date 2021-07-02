import Title from "../Title"
import Nav from "../Nav"

const Header = () => {
    return (
        <header>
            <div className='sub-wrapper'>
                <Title />
                <Nav />
            </div>
        </header>
    )
}

export default Header