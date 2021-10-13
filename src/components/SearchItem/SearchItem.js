import React from 'react';
import TextField from '@mui/material/TextField';
import { Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
const SearchTextField = () => {

    const fetchData = () => {
        fetch("https://giphy.p.rapidapi.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=funny%20cat", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "dc6zaTOxFJmzC",
                "x-rapidapi-host": "giphy.p.rapidapi.com"
            }
        })
        .then(response => {
            console.log(response);
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
                    />
                    <Button 
                        variant="primary" 
                        id="button-addon2"
                        onClick={() => fetchData()}>
                        Search GIFs!
                    </Button>
                </InputGroup>
            </Col>
            <Col></Col>
        </Row>
        
    );
}

export default SearchTextField;


