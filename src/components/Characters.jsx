import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import Search from './Search';

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
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorites => {
    dispatch({ type: 'ADD_FAVORITE', payload: favorites })
  }

  //const handleSerach = (event) => {
  //setSearch(searchInput.current.value);
  //}

  const handleSerach = useCallback(() => {
    setSearch(searchInput.current.value);
  }, [])

  // const filteredUsers = characters.filter((user) => {
  // return user.name.toLowerCase().includes(search.toLowerCase());
  //});

  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }), [characters, search]
  );

  return (
    <div className="Characters">

      {favorites.favorites.map(favorites => (
        <li key={favorites.id}>
          {favorites.name}
        </li>
      ))}

      <Search search={search} searchInput={searchInput} handleSerach={handleSerach} />

      {filteredUsers.map(character => (
        <div className="item" key={character.id}>
          <h2>{character.name}</h2>
          <button type="button" onClick={() => handleClick(character)}> Agregar a Favoritos</button>
        </div>
      ))}
    </div>
  );
}

export default Characters;
