import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';

function ContentForm() {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Название</Form.Label>
                            <Form.Control placeholder="Название"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Год</Form.Label>
                            <Form.Control placeholder="Год"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Цена</Form.Label>
                            <Form.Control placeholder="Цена"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control placeholder="Описание"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control placeholder="Описание"/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control as="select">
                                <option>В наличии</option>
                                <option>Ожидается</option>
                                <option>Нет в наличии</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            отправить
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default ContentForm
