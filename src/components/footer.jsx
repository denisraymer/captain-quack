import React from 'react';
import Grid from '@material-ui/core/Grid';

export function Footer() {
    return (
        <div className='footer footer_fluid'>
            <Grid container>
                <Grid item xs='12'>
                    <div className="footer__copyright">© 2015 CAPTAIN QUACK <br/> Десница тысячелетия и моллюск!</div>
                </Grid>
            </Grid>
        </div>
    )
}
