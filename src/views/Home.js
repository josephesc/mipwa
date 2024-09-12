import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <header className="App-header">
                <h1>Hola Mundo</h1>
                <nav>
                    <ul>
                        <li><Link to="/menu">Menú</Link></li>
                        <li><a href="#link2">Link 2</a></li>
                        <li><a href="#link3">Link 3</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Home