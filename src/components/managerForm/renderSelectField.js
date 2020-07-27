import React from 'react';
import {withStyles, FormHelperText, MenuItem, Select, FormControl} from '@material-ui/core';

const CustomFormControl = withStyles({
    root: {
        width: '100%',
        marginTop: 20,
        '& div.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #f44336'
        },
        '& div.MuiSelect-select.MuiSelect-select': {
            paddingLeft: 10
        },
        '& div.MuiInput-underline:before': {
            borderBottom: '2px solid #dcdcdc'
        },
        '& div.MuiInput-underline:after': {
            borderBottom: '2px solid #000'
        },
        '& div.MuiInput-underline.Mui-error:after': {
            borderBottom: '2px solid #f44336'
        },
        '& div.MuiSelect-select:focus': {
            backgroundColor: 'transparent'
        },
        '& div.MuiInputBase-root': {
            borderTop: '1px solid #dcdcdc',
            borderLeft: '1px solid #dcdcdc',
            borderRight: '1px solid #dcdcdc',
            height: 40,
            fontSize: 14,
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 700,
            color: '#999'
        },
        '& div.MuiInputBase-input': {
            padding: '6px 0 5px'
        },
        '& svg': {
            color: '#000'
        }
    }
})(FormControl);

export const renderSelectField = ({input, meta: {touched, error, warning}}) => {
    const formControlStatus = touched && ((error && `${error}`) || (warning && `${warning}`));
    return (
        <CustomFormControl error={formControlStatus}>
            <Select
                {...input}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value='' disabled>Статус</MenuItem>
                <MenuItem value='В наличии'>В наличии</MenuItem>
                <MenuItem value='Ожидается'>Ожидается</MenuItem>
                <MenuItem value='Нет в наличии'>Нет в наличии</MenuItem>
            </Select>
            <FormHelperText>{formControlStatus}</FormHelperText>
        </CustomFormControl>
    )

}
