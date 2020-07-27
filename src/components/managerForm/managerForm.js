import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {Field, reduxForm} from 'redux-form';
import RenderField from './renderField';
import {alphaNumeric, numeric, required} from './validatesManagerForm';
import {renderSelectField} from './renderSelectField';

function managerForm(props) {
    const colorScheme = ['fff', '000', 'cbcbcc', 'd74345', '88c504'];
    return (
        <Container>
            <Form onSubmit={props.handleSubmit}>
                <Row>
                    <Col>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Название'
                            warn={alphaNumeric}
                            name='title'/>
                    </Col>
                    <Col>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Год'
                            warn={numeric}
                            name='year'/>
                    </Col>
                    <Col>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Цена'
                            warn={numeric}
                            name='price'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Field
                            className='form-control'
                            component={RenderField}
                            validate={required}
                            label='Описание'
                            warn={alphaNumeric}
                            name='description'/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Цвет</Form.Label>
                            <div>
                                {colorScheme.map((color, index) => {
                                    return (
                                        <label key={`${index}${color}`}>
                                            <Field name='color' component='input' type='radio' value={`#${color}`}/>
                                        </label>
                                    )
                                })}
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Field
                            component={renderSelectField}
                            className='form-control'
                            validate={required}
                            name='status'/>
                    </Col>
                    <Col>
                        <Button variant='primary' type='submit'>
                            отправить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

const ReduxManagerForm = reduxForm({form: 'managerForm'})(managerForm);

export default ReduxManagerForm;
