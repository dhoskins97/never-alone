import React from 'react';
import './App.scss';
import PropTypes from 'prop-types';
import ReactAnimatedEllipsis from 'react-animated-ellipsis';
import logo from './neveralonelogo.png';

 

function App() {
  console.log(logo)
  
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <div className="header">
        I am feeling<ReactAnimatedEllipsis 
      fontSize="1rem"
      marginLeft="0px"
      spacing="0rem" />
      </div>
      <div className="buttonContainer">
        <div className="button">Unloved</div>
        <div className="button">Unimportant</div>
        <div className="button">Alone</div>
      </div>
    </div>
  );
}

export default App;
