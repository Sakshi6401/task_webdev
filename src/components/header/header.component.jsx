import React from 'react';
import './header.style.css';

const Header = () => (
    <div className='header'>
        <h1>.medtourism</h1>
        <div className='options'>
            <a className='option' href='#'>
                PROCEDURE
            </a>
            <a className='option' href='#'>
                DOCTORS
            </a>
            <a className='option' href='#'>
                OUR LINKS
            </a>
            <a className='option' href='#'>
                ABOUT
            </a>
        </div>
    </div>
);

export default Header;