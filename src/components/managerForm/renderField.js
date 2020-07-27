import React from 'react';
import {withStyles, TextField} from '@material-ui/core';

const CustomRenderField = withStyles({
    root: {
        width: '100%',
        marginBottom: 10,
        '& label': {
            fontSize: 14,
            fontFamily: `'Roboto', sans-serif`,
            fontWeight: 700,
            marginTop: 8,
            marginLeft: 10
        },
        '& label.Mui-focused': {
            color: '#999',
            marginTop: 0
        },
        '& label.MuiFormLabel-filled': {
            marginTop: 0
        },
        '& input': {
            border: '1px solid #dcdcdc',
            borderBottom: '2px solid #dcdcdc',
            height: 40,
            padding: '0 0 0 10px'
        },
        '& div.MuiInput-underline:after': {
            borderBottom: '2px solid #000'
        },
        '& div.MuiInput-underline.Mui-error:after': {
            borderBottom: '2px solid #f44336'
        },
        '& div.MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#f44336'
        }
    }
})(TextField);

const RenderField = ({input, label, type, meta: {touched, error, warning}}) => {
    const fieldStatus = touched && ((error && `${error}`) || (warning && `${warning}`));
    return (
        <CustomRenderField
            helperText={fieldStatus}
            error={fieldStatus}
            label={label}
            type={type}
            id='custom-css-standard-input'
            {...input}/>
    );
};

export default RenderField;
