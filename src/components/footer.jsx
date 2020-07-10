import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

export function Footer() {
    return (
        <Container fluid className='footer footer_fluid'>
            <Row>
                <Col>
                    <div className="footer__copyright">© 2015 CAPTAIN QUACK <br/> Десница тысячелетия и моллюск!</div>
                </Col>
            </Row>
        </Container>
    )
}
