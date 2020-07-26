import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const ErrorIndicator = (props) => {
    const {errorMessage = 'Error'} = props;

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div className="error-message">
                        <h1>{errorMessage}</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ErrorIndicator;
