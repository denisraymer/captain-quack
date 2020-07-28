import {TableCell, withStyles} from '@material-ui/core';

export const CustomTableCell = withStyles({
    head: {
        backgroundColor: '#c4092f',
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: 700,
        fontSize: 15,
        color: '#fff'
    },
    body: {
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: 400,
        fontSize: 15,
        color: '#282d30'
    }
})(TableCell);
