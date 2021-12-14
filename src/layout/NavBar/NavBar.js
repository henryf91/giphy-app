import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import navBarStyles from './NavBar.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NavBar = () => {

    const history = useHistory();
    const handleOnClick = (link) => {history.push(link)};

    return(
      <div className={navBarStyles.spacing}>
        <Nav fill variant="tabs" defaultActiveKey="/">
          <Nav.Item onClick={() => handleOnClick('/')}>
            <Nav.Link eventKey="link-1"><Link to="/">Search</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleOnClick('/favs')}>
            <Nav.Link eventKey="link-2"><Link to="/favs">My favorites</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => handleOnClick('/upload')}>
            <Nav.Link eventKey="link-3"><Link to="/upload">Upload</Link></Nav.Link>
          </Nav.Item>
        </Nav>   
      </div>
    )
}

export default NavBar;