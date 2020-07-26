import React from 'react';
import {Form} from 'react-bootstrap';

export const renderSelectField = ({input, meta: {touched, error, warning}}) => {
    const formControlStatus = touched && ((error && `${error}`) || (warning && `${warning}`));
    return (
        <Form.Group>
            <Form.Control {...input} component='select' className={formControlStatus} as='select' placeholder='Статус'>
                <option value=''>Статус</option>
                <option value='В наличии'>В наличии</option>
                <option value='Ожидается'>Ожидается</option>
                <option value='Нет в наличии'>Нет в наличии</option>
            </Form.Control>
        </Form.Group>
    )

}
