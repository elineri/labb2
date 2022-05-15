import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import './index.css';

export default function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/labb2" element={<Home/>}/>
        <Route path="/labb2/portfolio" element={<Portfolio/>}/>
      </Routes>
    </div>
  );
}

