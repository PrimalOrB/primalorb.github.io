const Footer = () => {

    function year(){
        return new Date().getFullYear()
    }

    return (
        <footer>
            <div className='sub-wrapper'>
                <p>&copy; { year() } Andrew Ogilvie</p>
            </div>
        </footer>
    )
}

export default Footer