import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import './RecipeList.css';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);  // Store list of recipes
  const location = useLocation();  // Get search query from the URL
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('search');
    if (query) {
      fetchRecipes(query);  // Fetch recipes when query changes
    }
  }, [location.search]);

  const fetchRecipes = async (query) => {
    setLoading(true);  // Start loading
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=5789cdd952584e62bfbf3ec735a3ea01`
      );
      setRecipes(response.data.results);  // Store the results
    } catch (error) {
      console.error("Error fetching recipes", error);
    } finally {
      setLoading(false);  // End loading
    }
  };

  return (
    <div className="recipe-list">
      {loading ? <p>Loading...</p> : null}  {/* Show loading message */}
      {recipes.length ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes found</p>  // Show only if no recipes are found after search
      )}
    </div>
  );
};

export default RecipeList;
