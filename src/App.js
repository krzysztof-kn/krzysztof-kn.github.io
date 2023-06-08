
import './App.css';
import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import contact from './pages/contact';
import './stylesheets/home.css';
import './stylesheets/header-footer.css';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;