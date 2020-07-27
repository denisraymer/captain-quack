import {Button, withStyles} from '@material-ui/core';

export const CustomButton = withStyles({
    root: {
        backgroundColor: '#c4092f',
        height: 40,
        marginTop: 20,
        '& span.MuiButton-label': {
            fontSize: 16,
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 700,
            marginTop: 2,
            '& span.MuiButton-endIcon': {
                marginLeft: 2,
                marginTop: '-2px'
            },
            '& svg': {
                fontSize: 16
            }
        }
    }
})(Button);
