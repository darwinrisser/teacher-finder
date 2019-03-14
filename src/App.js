import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">
          <div id="homeHeader">
            <div id="leftSide">Welcome to TeacherFinder!</div>
            <div id="rightSide"><span>Home</span><span>My Account</span></div>
          </div>
        </header>
        <main id="homeContent">
          <div id="homeLeftSide">
            <p>Are you a band, choir, or orchestra director? Are you looking for great private lesson teachers to hepl your students achieve their maximum potential? Do you want to be able to hire the best teachers in your area who have been recommended by your colleagues? Create a free account today to instantly connect with private lesson teachers in your area and help take your program to the next level!</p>
            <button className="login">Create Account</button>
          </div>
          <div id="homeRightSide">
            <p>Are you a private lesson instructor? Are you looking to expand your studio and work with the best middle school and high school students in the state? Do you want to work with other great teachers in your area who have been recommended by your colleagues? Create a free account today to instantly connect with band, choir, and orchestra directors in your area who are searching for lesson teachers just like you!</p>
            <button className="login">Create Account</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
