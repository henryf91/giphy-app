import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routing from '../../pages/Routing';
import NavBar from '../NavBar/NavBar';

const MainContainer = () => {
    
    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <NavBar></NavBar>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <Routing></Routing>
                </Col>
            </Row>
        </Container>
    );
}

export default MainContainer;