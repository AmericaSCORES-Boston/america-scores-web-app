import React, { Component } from 'react';
import '../App.css';
import asLogo from '../Assets/aslogo.png'

class App extends Component {
  render() {
    return (
      <style>
          #side-nav{
            display: none;
          }
      </style>
      <div className="form">
          <form action="/manageAccounts">
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">Login</button>
          </form>

        <img src={asLogo} alt="AS LOGO" style={{width: 300, height: 350, padding: 30}}/>

      </div>

    );
  }
}

export default App;
