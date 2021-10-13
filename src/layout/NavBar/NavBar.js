import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-1"><Link to="/">Search</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"><Link to="/favs">My favorites</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3"><Link to="/upload">Upload</Link></Nav.Link>
          </Nav.Item>
        </Nav>   
    )
}

export default NavBar;