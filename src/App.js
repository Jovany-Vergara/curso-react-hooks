import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import ThemeContext from './context/ThemeContext';

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;
