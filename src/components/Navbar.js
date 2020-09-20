import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click , setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    console.log(click);

    return (
        <>
        <nav className="navbar"> 
        <div className="navbar-container">
            <Link to='/' className='navbar-logo'>
                TOURISM <i className='fas fa-globe-asia fa-xl'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={ click ? 'nav-menu active' : 'nav-menu'}>

                <li className='nav-item'>
                    <Link to ='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/client' className='nav-links' onClick={closeMobileMenu}>Client</Link>
                </li>
                <li className='nav-item'>
                    <Link to ='/address' className='nav-links' onClick={closeMobileMenu}>Address</Link>
                </li>

            </ul>
        </div>
        
        </nav>
        </>
    );
}

export default Navbar
