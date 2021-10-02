import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Title.css'
import Title from './Title';
import  './HeadLine.css';
import HeadLine from './HeadLine';
import NavBar from './NavBar';
import './NavBar.css'


function App() {
  return (
    <div className="App">
      <Title/>
      <NavBar/>
     <HeadLine />
    </div>
  );
}

export default App;
