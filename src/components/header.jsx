import React from 'react';
import logo from '../assets/images/logo.png';
import Grid from '@material-ui/core/Grid';

export function Header () {
    return (
        <div className='header header_fluid'>
            <Grid container>
                <Grid item xs='12'>
                    <div className="header__logo">
                        <img className='header__logo-img' src={logo} alt='Captain quack logo'/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
