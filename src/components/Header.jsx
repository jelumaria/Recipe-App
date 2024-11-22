import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search-results?cuisine=${query}`); 
      setQuery('');  
      
    }
  };

  return (
    <Navbar style={{ height: '80px' }} className="navbar navbar-expand-lg bg-warning">
      <Container className="text-light" fluid>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand className="text-light">
            <i className="fa-solid fa-utensils me-3 text-light"></i>
            Tasty Tales
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/recipes" style={{ textDecoration: 'none', color: 'white' }}>
              <Nav.Link as="span">All Recipes</Nav.Link>
            </Link>
            <Nav.Link className="me-5">Features</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            {/* Search Bar for Cuisine */}
            <Form.Control
              type="search"
              placeholder="Search by Cuisine"
              className="me-2"
              aria-label="Search Cuisine"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
