import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import logo from '../assets/images/logo.png';

let Header = () => {
    return (
        <Container fluid className='header header_fluid'>
            <Row>
                <Col>
                    <div className="header__logo">
                        <img className='header__logo-img' src={logo} alt='Captain quack logo'/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;
