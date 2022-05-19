import React, { useState, useEffect, useReducer } from 'react';

const initialState = {
  favorites: [],
}

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoritesReducer, initialState);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorites => {
    dispatch({ type: 'ADD_FAVORITE', payload: favorites })
  }

  return (
    <div className="Characters">

    {favorites.favorites.map (favorites => (
      <li key={favorites.id}>
        {favorites.name}
      </li>
    ))}

      {characters.map(character => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}> Agregar a Favoritos</button>
        </div>
      ))}
    </div>
  );
}

export default Characters;
