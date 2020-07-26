import {Form} from 'react-bootstrap';
import React from 'react';

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    const formControlStatus = touched && ((error && `${error}`) || (warning && `${warning}`));
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control {...input} placeholder={label} type={type} className={formControlStatus}/>
        </Form.Group>
    )
}
