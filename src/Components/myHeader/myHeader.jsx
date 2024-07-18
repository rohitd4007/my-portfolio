import './myHeader.css';


const MyHeader = (props) => {

    return (
        <>
            <nav className="navbar">
                <div className='my-logo'>RD</div>
                <ul className="navbar-list">
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="#about">About</a></li>
                    <li className="navbar-item"><a href="#projects">Projects</a></li>
                    <li className="navbar-item"><a href="#articles">Articles</a></li>
                    <li className="navbar-item"><a href="#skills">Skills</a></li>
                    <li className="navbar-item"><a href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}


export default MyHeader