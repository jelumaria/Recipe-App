import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../redux/slices/recipeSlice';  

import { Card } from 'react-bootstrap';  

import { Link } from 'react-router-dom';

const ViewDetails = () => {
  const { id } = useParams();  
  
  const dispatch = useDispatch();
  

  const { allRecipes, loading, errorMsg } = useSelector((state) => state.recipes);
  const selectedRecipe = allRecipes.find((recipe) => recipe.id === parseInt(id));
  
  
  useEffect(() => {

    if (!allRecipes.length) {
      dispatch(fetchRecipes());
    }
  }, [dispatch, allRecipes.length]);
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (errorMsg) {
    return <div>{errorMsg}</div>;
  }

  if (!selectedRecipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h2 className='text-center m-5'>{selectedRecipe.name}</h2>
      <Card className="shadow-sm container-fluid" style={{ width: '50%' }}>
        <Card.Img
          height="50%"
          variant="top"
          src={selectedRecipe.image} 
          alt={selectedRecipe.name}
          className="card-img-top"
          style={{ objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/recipe/${selectedRecipe.id}`} style={{ textDecoration: 'none' }}>
              {selectedRecipe.name}
            </Link>
          </Card.Title>
          <Card.Text>{selectedRecipe.description}</Card.Text>
          <h3>Ingredients:</h3>
          <ul>
            {selectedRecipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{selectedRecipe.instructions}</p>
          <p>Preparation Time : {selectedRecipe.prepTimeMinutes} Minutes</p>
          <p> Cooking Time : {selectedRecipe.cookTimeMinutes} Minutes</p>
          <p> Difficulty : {selectedRecipe.difficulty}</p>
          <p> Cuisine : {selectedRecipe.cuisine}</p>
          <p> Calories per Serving : {selectedRecipe.caloriesPerServing}</p>
          <p> Rating : {selectedRecipe.rating} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
          <p> Review : {selectedRecipe.reviewCount}</p>

          <p> Meal Type : {selectedRecipe.mealType}</p>

          <div>
            {selectedRecipe.tags?.map((tag, index) => (
              <Link
                key={index}
                to={`/tags/${tag}`} 
                
                style={{ textDecoration: 'none', marginRight: '10px' }}
              >
                #{tag}
              </Link>
            ))}
          </div>

        </Card.Body>
      </Card>
    </div>
  );
};

export default ViewDetails;
