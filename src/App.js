import React from 'react';
import './App.css';
import Header from './Header';
import GridMenu from './GridMenu';

function App() {
  return (
    <div className="HeaderContainer">
      <Header />
      <div className="MenuContainer">
        <GridMenu />
      </div>
    </div>
  );
}

export default App;
