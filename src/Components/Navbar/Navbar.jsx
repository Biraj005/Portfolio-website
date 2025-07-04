import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
function Navbar() {
  
    return (
        <nav className="navbar">
            <img src="/vite.svg" alt="Logo" className="logo" />
            <ul className="nav-list">
                  <AnchorLink className='anchor-link' offset={50} href='#home'><li>Home</li></AnchorLink>
                  <AnchorLink className='anchor-link' offset={50} href='#about'> <li>About</li></AnchorLink>
                  <AnchorLink className='anchor-link' offset={50} href='#project'><li>Portfolio</li></AnchorLink> 
                  <AnchorLink className='anchor-link' offset={50} href='#contact'> <li>Contact</li></AnchorLink>
            </ul>
            <div className="contact">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>    Contact Me</AnchorLink>
             
            </div>
        </nav>
    );
}

export default Navbar;
