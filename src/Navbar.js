import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './style.css';

export const Navbar = () => {
  return <>
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/inicio">RESTAURANTE-IUDIGITAL</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/inicio">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/buscar">Search Restaurante</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " to="/nuevo">New Restaurante</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </>
}
