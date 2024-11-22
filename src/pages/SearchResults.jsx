import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap';

const SearchResults = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const cuisineQuery = new URLSearchParams(location.search).get('cuisine');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes); 
        
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (cuisineQuery) {

        const filtered = recipes.filter((recipe) =>
        recipe.cuisine.toLowerCase().includes(cuisineQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes(recipes);  
      
    }
  }, [cuisineQuery, recipes]);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <div>{error}</div>;

  return (
    <div className="recipes-container-fluid mx-3">
      <h1 className='text-center m-5'>Recipes for {cuisineQuery || 'All Cuisines'}</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-5 ">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Col key={recipe.id}>
              <Card className='' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>{recipe.description}</Card.Text>
                  <Button variant="warning" href={`/recipe/${recipe.id}`}>
                    View Recipe
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No recipes found for the selected cuisine.</p>
        )}
      </Row>
    </div>
  );
};

export default SearchResults;
