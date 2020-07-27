import React from 'react';
import {Form} from 'react-bootstrap';

export const renderRadioField = (props) => {
    return (
        <Form.Check
            type="radio"
            label="first radio"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"/>
    )
}
