import * as React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/labb2" element={<Home/>}/>
        <Route path="/labb2/education" element={<Education/>}/>
      </Routes>
    </div>
  );
}

function Home(){
  return(
    <h1>hej</h1>
  )
}

function Education(){
  return(
    <h1>hej</h1>
  )
}
