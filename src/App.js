// App.js
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MenuPage from './views/MenuPage'; // Asegúrate de que la ruta sea correcta
import Home from './views/Home';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            {/* Agrega más rutas según sea necesario */}
          </Routes>
        <footer className="bottom-bar">
          <div className="bar-item"><Link to="/home">Inicio</Link></div>
          <div className="bar-item">Buscar</div>
          <div className="bar-item">Perfil</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
