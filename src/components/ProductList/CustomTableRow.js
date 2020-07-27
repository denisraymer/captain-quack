import {withStyles} from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';

export const CustomTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    }
}))(TableRow);
