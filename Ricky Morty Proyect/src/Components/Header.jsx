import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListaPersonajes from './_axios/ListaPersonajes';
import Lista from './_fetch/Lista';

export default function Header() {

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Kenia</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className='nav-link active'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/personajes_1" className='nav-link'>Lista 1</Link>
                            </li>
                            <li>
                                <Link to="/personajes_2" className='nav-link'>Lista 2</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" />
                <Route path="/personajes_1" element={<ListaPersonajes />}/>
                <Route path="/personajes_2" element={<Lista />}/>
            </Routes>
        </Router>
    )
}
