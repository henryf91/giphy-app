import React, {useState} from 'react';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const SearchItem = ({setSearchResults, setIsLoadingResults}) => {
    const [queryString, setQueryString] = useState('')

    const fetchData = (queryString) => {
        setIsLoadingResults(true)
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=17gNbwq47Uc5lBqpqWbKZJ3KcEmIL1mX&q=${queryString}&limit=25&offset=0&rating=g&lang=en`)
        .then(response => {
            return response.json()
        })
        .then( data => {
            console.log(data.data)
             setSearchResults(data.data)
             setIsLoadingResults(false)
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <Row>
            <Col></Col>
            <Col xs="8">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Write some text to search a gif..."
                        value={queryString}
                        onChange={(e) => setQueryString(e.target.value)}
                    />
                    <Button 
                        variant="primary" 
                        id="button-addon2"
                        onClick={() => fetchData(queryString)}>
                        Search GIFs!
                    </Button>
                </InputGroup>
            </Col>
            <Col></Col>
        </Row>
        
    );
}

export default SearchItem;


