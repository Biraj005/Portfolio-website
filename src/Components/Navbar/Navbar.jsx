import './Navbar.css';
function Navbar() {
    return (
        <nav className="navbar">
            <img src="/vite.svg" alt="Logo" className="logo" />
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="contact">
                Contact Me
            </div>
        </nav>
    );
}

export default Navbar;
