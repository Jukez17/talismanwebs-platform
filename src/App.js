import React from 'react';
import './App.css';
import Header from './Header';
import GridMenu from './GridMenu';

// if you click the live share icon the bottom left icon
// i sent u message there
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
