import React, {useEffect, useState} from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { fetchData } from '../../helpers/dataAPI';
import styles from "./SearchItem.module.css";

const SearchItem = ({
    setSearchResults, 
    setIsLoadingResults, 
    queryString, 
    setQueryString,
    setIsSearchDone
}) => {

    const handleKeyDown = (e) => 
        e.keyCode === 13 ? fetchData(queryString, setSearchResults, setIsLoadingResults, setIsSearchDone) : null

    return (
        <div className={styles.search_input}>
            <Row >
                <Col></Col>
                <Col xs="8">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Write some text to search a gif..."
                            value={queryString}
                            onChange={(e) => setQueryString(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <Button 
                            variant="primary" 
                            id="button-addon2"
                            onClick={() => fetchData(queryString, setSearchResults, setIsLoadingResults, setIsSearchDone)}>
                            Search GIFs!
                        </Button>
                    </InputGroup>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default SearchItem;


