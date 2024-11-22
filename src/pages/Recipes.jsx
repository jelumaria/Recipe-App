import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../redux/slices/recipeSlice"; 
import { Card, Pagination, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";


const Recipes = () => {
    const dispatch = useDispatch();
    const { allRecipes, loading, errorMsg } = useSelector((state) => state.recipes);


    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage] = useState(6); 
    

    useEffect(() => {
        dispatch(fetchRecipes());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (errorMsg) {
        return <div>{errorMsg}</div>;
    }

    if (allRecipes.length === 0) {
        return <div>No recipes found!</div>;
    }


    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);


    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    const totalPages = Math.ceil(allRecipes.length / recipesPerPage);

    return (
        <div>

            <h2 className="text-center my-4">All Recipes</h2>
            <Row className="g-4 mx-3">
                {currentRecipes.map((recipe) => (
                    <Col key={recipe.id} lg={4} md={6} sm={12}>
                        <Card className="shadow-sm" style={{ width: '100%' }}>
                            <Card.Img
                                height="250px"
                                variant="top"
                                src={recipe.image}
                                alt={recipe.name}
                                className="card-img-top"
                                style={{ objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>                  
                                    <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'white' }}>{recipe.name}</Link>
                                </Card.Title>
                                <p> Cuisine : {recipe.cuisine}</p>


                                <p> Rating : {recipe.rating} <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></p>
                                <p> Review : {recipe.reviewCount}</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Pagination */}
            <Pagination className="justify-content-center mt-4">
                {[...Array(totalPages)].map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
};

export default Recipes;
