import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Routing from '../../pages/Routing';
import NavBar from '../NavBar/NavBar';

const MainContainer = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <NavBar></NavBar>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <Routing></Routing>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default MainContainer;