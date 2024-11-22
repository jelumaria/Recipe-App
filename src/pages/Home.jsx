import React from 'react'
import { Link } from 'react-router-dom'
import Homeimage from '../assets/Home.jpg'
import Card from 'react-bootstrap/Card';
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/img2.jpg'

import Img3 from '../assets/img3.jpg'
import Recipes from './Recipes';





const Home = () => {
    return (
        <div style={{ paddingTop: '100px' }} className='container'>
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h3 className='mb-5'>Welcome to <span className='text-warning'>Tasty Tales</span></h3>
                    <p style={{ textAlign: 'justify' }}>Tasty Tales provides an extensive collection of delicious recipes from around the world. With features like seamless pagination for browsing, cuisine-based search, and detailed recipe views, finding and preparing your next meal has never been easier. Let's make cooking fun, accessible, and inspiring!</p>
                    <Link to={'/home'} className='btn btn-info'> Get Started</Link>
                </div>
                <div className="col"></div>
                <div className="col-lg-6">
                    <img
                        style={{ borderRadius: '15px' }}
                        className="img-fluid py-5 me-3"
                        src={Homeimage}
                        alt=""
                    />        </div>
            </div>
            {/* features */}
<Recipes/>
            <div className="my-5">
                <h3 className="text-center">Features</h3>
                <div className="row mt-5">
                    <div className="col-lg-4">
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={"250px"} className='image-fluid' variant="top" src={Img1} />
                            <Card.Body>
                                <Card.Title>Recipe Browsing </Card.Title>
                                <Card.Text>
                                    Explore a wide variety of recipes effortlessly, with a paginated layout that ensures smooth navigation without overwhelming you.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-lg-4">
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={"250px"} className='image-fluid' variant="top" src={Img2} />
                            <Card.Body>
                                <Card.Title>Cuisine-Based Search</Card.Title>
                                <Card.Text>
                                    Quickly find recipes from your favorite cuisines with our powerful search functionality, tailored to your taste preferences.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>
                    <div className="col-lg-4">
                        <Card className='p-2' style={{ width: '20rem' }}>
                            <Card.Img height={"250px"} className='image-fluid' variant="top" src={Img3} />
                            <Card.Body>
                                <Card.Title>Detailed Recipe View</Card.Title>
                                <Card.Text>
                                    Access step-by-step instructions, ingredient lists, and cooking tips for each recipe, making meal preparation a breeze.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>


                </div>
            </div>
            
        </div>
    )
}

export default Home