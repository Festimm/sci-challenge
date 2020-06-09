import React, { Component } from 'react';
import './App.css';
import logo from './assets/images/logo.png';
import profileImage from './assets/images/avatar-male.png';


import MainHeader from './ChallengeComponents/MainHeader/MainHeader';
import SecondHeader from './ChallengeComponents/SecondHeader/SecondHeader';
import HorizontalNav from './ChallengeComponents/HorizontalNav/HorizontalNav';
import Body from './ChallengeComponents/Body/Body';


class App extends Component {
  render() {
    
    return (
      <div className="App">
          <MainHeader logo={logo} avatar={profileImage} />

           <SecondHeader />
           <HorizontalNav />
           
          <Body />
          
      </div>
    );
  }
}

export default App;
