import React, { Component } from 'react';
import '../Login.css';
import asLogo from '../Assets/aslogo.png'

class Login extends Component {
  render() {
    return (
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

export default Login;
