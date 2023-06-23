import React, {Component } from 'react';
import Particles from 'react-particles';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions}
        />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
        { /* <Facerecognition />*/}
    </div>
  );
}

export default App;
