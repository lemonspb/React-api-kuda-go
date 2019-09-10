import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = ()=>{

    

return (
<header className='header'>
    <nav className='nav'>
        <Link to='/events/' className='nav__link'>события</Link>
        <Link to='/place/' className='nav__link'>места</Link>
        <Link to='/news/' className='nav__link'>новости</Link>
  
    </nav>
    </header>
)
}

export default Header;
