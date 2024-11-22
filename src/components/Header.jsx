import React, { useState } from 'react';
import { Navbar, Container, Button, Form, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false); // State to toggle search bar visibility
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search-results?cuisine=${query}`);
      setQuery('');
    }
  };

  return (
    <Navbar expand="lg" style={{ height: '80px' }} className="navbar navbar-expand-lg bg-warning">
      <Container className="text-light" fluid>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand className="text-light">
            <i className="fa-solid fa-utensils me-3 text-light"></i>
            Tasty Tales
          </Navbar.Brand>
        </Link>

        {/* Mobile Menu Icon (Hamburger) */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 d-flex justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/recipes" style={{ textDecoration: 'none', color: 'white' }}>
              <Nav.Link className='text-light' as="span">All Recipes</Nav.Link>
            </Link>
            <Nav.Link className="text-light me-5">Features</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Nav className="d-lg-none">
          <Nav.Link
            onClick={() => setShowSearch(!showSearch)} 
            
            style={{ cursor: 'pointer' }}
          >
            <i className="fa-solid fa-search text-light"></i> 
            
          </Nav.Link>
        </Nav>
      </Container>


      {showSearch && (
        <Form className="d-flex w-100 mt-2 d-block d-lg-none" onSubmit={handleSearch}>
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
      )}


      <div className="d-none d-lg-flex justify-content-center align-items-center">
        <Form className="d-flex w-auto" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search by Cuisine"
            className="me-2"
            aria-label="Search Cuisine"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ width: '300px' }} 
            
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </div>
    </Navbar>
  );
};

export default Header;
