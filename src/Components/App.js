import React, { Component } from 'react';
import '../App.css';
import asLogo from '../Assets/aslogo.png'

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

      <div className="form">
        <div >
          <form>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button type="submit">Login</button>
          </form>
        </div>

        <img src={asLogo} alt="AS LOGO" style={{width: 300, height: 300}}/>


      </div>

    );
  }
}

export default App;
