import React from 'react';
import clsx from 'clsx';
import {Radio, makeStyles} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CustomRadioButton = props => {
    const {value} = props;
    const radioButtonColor = value.value;
    const radioButtonStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            border: '1px solid #e7e7e7',
            borderRadius: '50%',
            width: 25,
            height: 25,
            backgroundColor: radioButtonColor,
            'input:hover ~ &': {
                backgroundColor: radioButtonColor,
            },
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
        },
        checkedIcon: {
            backgroundColor: radioButtonColor,
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                borderRadius: 50,
                border: '4px solid #c4092f',
                background: radioButtonColor,
                position: 'absolute',
                left: 5,
                top: 5,
                display: 'block',
                width: 32,
                height: 32,
                content: '""',
            },
            'input:hover ~ &': {
                backgroundColor: radioButtonColor,
            },
        },
    });
    const radioButtonClasses = radioButtonStyles();

    return (
        <Radio
            disableRipple
            checkedIcon={<span className={clsx(radioButtonClasses.icon, radioButtonClasses.checkedIcon)}/>}
            className={radioButtonClasses.root}
            color='default'
            icon={<span className={radioButtonClasses.icon}/>}
            {...value}
        />
    );
};

const RenderRadioField = props => {
    const {input} = props;
    return (
        <FormControlLabel value={input} control={<CustomRadioButton/>}/>
    );
};

export default RenderRadioField;
