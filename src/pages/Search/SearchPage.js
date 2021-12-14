import React, { useEffect, useState } from 'react';
import SearchItem from '../../components/SearchItem/SearchItem';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import ShowResults from '../../layout/ShowResults/ShowResults';
import { SEARCH } from '../../helpers/constants';
import mainStyles from '../../styles/Main.module.css'

const SearchPage = () => {

    const [searchResults, setSearchResults] = useState([]);
    const [isLoadingResults, setIsLoadingResults] = useState(false);
    const [queryString, setQueryString] = useState('')
    const [isSearchDone, setIsSearchDone] = useState(false)
    
    
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10}>
                    <SearchItem 
                        setSearchResults={setSearchResults}
                        setIsLoadingResults={setIsLoadingResults}
                        setQueryString={setQueryString}
                        queryString={queryString}
                        setIsSearchDone={setIsSearchDone}
                        
                    />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col xs={12}>
                    {isLoadingResults ? 
                        (<Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>) :
                    searchResults && 
                        searchResults.length > 0 ? (
                            <ShowResults 
                                searchResults={searchResults}
                                setSearchResults={setSearchResults}
                                pageLoaded={SEARCH}
                            /> ):
                            <p className={mainStyles.advice_title}>
                                {isSearchDone && "No results for the current search."}
                            </p>
                            }
                </Col>
            </Row>
        </Container>

    );
}

export default SearchPage;
