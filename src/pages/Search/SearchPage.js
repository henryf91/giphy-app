import React from 'react';
import SearchItem from '../../components/SearchItem/SearchItem';
import { Container, Row, Col } from 'react-bootstrap';

const SearchPage = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <SearchItem />
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
}

export default SearchPage;
