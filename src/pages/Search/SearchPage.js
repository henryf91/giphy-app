import React, { useState } from 'react';
import SearchItem from '../../components/SearchItem/SearchItem';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ShowResults from '../../layout/ShowResults/ShowResults';
import { useEffect } from 'react';

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [isLoadingResults, setIsLoadingResults] = useState(false);
    
    useEffect(() => {
        console.log("QUE PEX")
    }, [searchResults])

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <SearchItem 
                        setSearchResults={setSearchResults}
                        setIsLoadingResults={setIsLoadingResults}
                    />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    {isLoadingResults ? (<Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                            </Spinner>) :
                    searchResults && <ShowResults searchResults={searchResults}/>}
                </Col>
                <Col></Col>
            </Row>
        </Container>

    );
}

export default SearchPage;
