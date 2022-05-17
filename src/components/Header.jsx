import React, {useContext, useState} from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkMode);
  }
  const color = useContext(ThemeContext);

  return (
    <div className="header">
      <h1 style={{ color }}> React Hooks </h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>

      <button type="button" onClick={() => setDarkmode
      (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
    </div>
  );
}

export default Header;
