import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import logo404 from '../assets/images/404.png';

export function Page404 () {
    return (
        <Container>
            <Row>
                <Col>
                    <div className='not-found'>
                        <div className='not-found__title'>
                            4{<img className='not-found__image' src={logo404} alt='Captain quack 404'/>}4 - ¡Ay caramba!
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
