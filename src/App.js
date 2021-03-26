import logo from '/Users/marvinliyanage/Desktop/2 Projects/Web Development/pokedex/src/curytering.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curyte
        </p>
        <a
          className="App-link"
          href="marvinliyanage.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
