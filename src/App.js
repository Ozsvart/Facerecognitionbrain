import React, {Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
        {/*<ImageLinkForm />
        <Facerecognition />*/}
    </div>
  );
}

export default App;
