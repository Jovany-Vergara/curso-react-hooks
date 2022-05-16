import React, {useState} from 'react';

const Header = () => {
  const [darkMode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkMode);
  }

  return (
    <div className="header">
      <h1> React Hooks </h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>

      <button type="button" onClick={() => setDarkmode
      (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button>
    </div>
  );
}

export default Header;
