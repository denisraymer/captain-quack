import React from 'react';
import logo from '../assets/images/logo.png';

export function Header () {
    return (
        <div className='header header_fluid'>
            <div className="header__logo">
                <img className='header__logo-img' src={logo} alt='Captain quack logo'/>
            </div>
        </div>
    );
}
