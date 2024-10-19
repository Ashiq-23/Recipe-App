import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/recipelist';
import './App.css';
import SearchBar from './components/searchbar';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div className="App">
        <SearchBar/>
        <Routes>
          <Route path="/recipes" element={<RecipeList/>} />  {/* List of recipes */}
          <Route path="/recipe/:id" element={<RecipeDetails/>} />  {/* Detailed recipe */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
