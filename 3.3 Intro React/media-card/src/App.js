import React from 'react';
// import logo from './logo.svg';
import profile from './images/keanu.jpg';
// import './App.css';
import './stylesheets/index.scss';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="media-card">
      <div className="media-card__profile">
      <img src={profile} className="media-card__img" alt="profile" />
      <div className="media-card__name">
      <h3>Keanu Reeves_</h3>
      <p>Viernes 23 de Agosto de 2019</p>
      </div>
      </div>
      <div className="media-card__content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="media-card__footer">
        <p>Leer más...</p>
        <div className="media-card__fav">
          <p>37 <span className="media-card__heart">&hearts;</span></p>
        </div>
      </div>

    </div>
  );
}

export default App;
