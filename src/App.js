import React from 'react';
// 👇️ import Routes instead of Switch 👇️
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

//import Home from './pages/Home';
import Get from './pages/Get';
import Post from './pages/Post';
import Put from './pages/Put';

export default function App() {
  return (
    <Router >
      <div>
        <nav className='divNav'>
          <div>
          <ul>
            <li>
              <Link to="/">Lista de Produtos</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar Produto</Link>
            </li>
          </ul>
          </div>
        </nav>

        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/cadastrar" element={<Post />} />
          <Route path="/" element={<Get />} />
          <Route exact path="/editar/:id?" element={<Put />} />
        </Routes>
      </div>
    </Router>
  );
}

