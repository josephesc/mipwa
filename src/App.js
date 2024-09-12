//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola Mundo</h1>
        <nav>
          <ul>
            <li><a href="#link1">Link 1</a></li>
            <li><a href="#link2">Link 2</a></li>
            <li><a href="#link3">Link 3</a></li>
          </ul>
        </nav>
      </header>

      <footer className="bottom-bar">
        <div className="bar-item">Inicio</div>
        <div className="bar-item">Buscar</div>
        <div className="bar-item">Perfil</div>
      </footer>
    </div>
  );
}

export default App;
