import React from 'react';
import './Home.css';
import Header from '../../Components/Header';
import GridMenu from '../../Components/GridMenu';

function Home() {
  return (
    <div className="HeaderContainer">
      <Header />
      <div className="MenuContainer">
        <GridMenu />
      </div>
    </div>
  );
}

export default Home;