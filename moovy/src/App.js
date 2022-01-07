import React, { useEffect, useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./pages/Search";
import Library from "./pages/Library";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  const [localMovies, setLocalMovies] = useState([]);
  return  (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link navbar-brand">Moovy</a>
          </li>
          <li className="nav-item active">
            <span className="sr-only nav-link"><Link to="/search" className="nav-components">Search</Link></span>
          </li>
          <li className="nav-item">
            <span className="sr-only nav-link"><Link to="/" className="nav-components">Library</Link></span>
          </li>
        </ul>
      </div>
    </nav>
    
    <Routes>
        <Route path="/" element={<Library/>} />
        <Route path="search" element={<Search/>} />
    </Routes>
  </div>
  );
};

export default App;
