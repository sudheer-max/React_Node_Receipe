import React, {useEffect, useState} from 'react';
import Food from './Food';
import './App.css';

const App = () => {
  const APP_ID = 'c7b8e412';
  const APP_KEY = 'ebfe941f91bd8b770d2c3280e5785366';

  const [receipe, setReceipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  

  useEffect( () => {
    getReceipe();
  }, [query]);

  const getReceipe = async () => {
    const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setReceipe(data.hits);
  }

  const updageChange = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updageChange}></input>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="receipies">
      {receipe.map(recipe => (
        <Food key={recipe.recipe.label} title = {recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image } ingredients={recipe.recipe.ingredients}></Food>
      ))}
      </div>
    </div>
  );
}

export default App;
