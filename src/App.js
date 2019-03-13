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
            <h1>Directors</h1>
            <p>Already have an account?</p>
            <button className="login">Login</button>
          </div>
          <div id="homeRightSide">
            <h1>Teachers</h1>
            <p>Already have an account?</p>
            <button className="login">Login</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
