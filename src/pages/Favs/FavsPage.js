import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FAVS, myFavs } from '../../helpers/constants';
import ShowResults from '../../layout/ShowResults/ShowResults';
import mainStyles from '../../styles/Main.module.css'

const FavsPage = () => {

    const [dataLS, setDataLS] = useState(JSON.parse(localStorage.getItem(myFavs) || "[]"));

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10}>
                
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                    {dataLS.length > 0 ?
                        <ShowResults 
                            searchResults={dataLS}
                            pageLoaded={FAVS}
                            setSearchResults={setDataLS}
                        /> : 
                        <p className={mainStyles.advice_title}>{"No favorites added. Try a search and add some fav GIF!"}</p>
                    }   
                <Col></Col>
            </Row>
        </Container>
    )
}

export default FavsPage;
