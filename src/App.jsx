import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import Recipes from "./pages/Recipes"; 

import ViewDetails from "./pages/ViewDetails"; 

import SearchResults from "./pages/SearchResults"; 
import Header from "./components/Header"; 

import Footer from "./components/Footer"; 


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        
        <Route path="/recipe/:id" element={<ViewDetails />} /> 
        
        <Route path="/search-results" element={<SearchResults />} /> 
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
