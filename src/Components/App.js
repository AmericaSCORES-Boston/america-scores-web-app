import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      <div className="login-page">
        <div className="form">
          <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button type="submit">Login</button>
          </form>
        </div>
        <img src="aslogo.png" alt="AS LOGO" align="center"
          style={{width: 500, height: 500, position: 'absolute',  justifyContent: 'center',
    alignItems: 'center', right:'37%'}} />

      </div>

    );
  }
}

export default App;
