import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';

const RecipeDetails = () => {
  const { id } = useParams();  // Get recipe ID from the URL
  const [recipeDetails, setRecipeDetails] = useState(null);  // Store recipe details
  const [loading, setLoading] = useState(false);  // Loading state

  const nav = useNavigate();

  useEffect(() => {
    fetchRecipeDetails();  // Fetch recipe details when component mounts
  }, [id]);

  const fetchRecipeDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=5789cdd952584e62bfbf3ec735a3ea01`
      );
      setRecipeDetails(response.data);  // Store recipe details in state
    } catch (error) {
      console.error("Error fetching recipe details", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!recipeDetails) return <p>No recipe details available</p>;

  return (
    <div className="recipe-details">
      <h2>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipeDetails.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3 style={{color:'White'}}>Instructions:</h3>
      <p>{recipeDetails.instructions}</p>
      <div>
        <button onClick={()=>nav('/recipes')}>Back</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
