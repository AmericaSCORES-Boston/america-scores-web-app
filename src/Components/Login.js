import '../Main.css';
import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import asLogo from '../Assets/aslogo.png'
import { Button }  from 'react-bootstrap'

/*
Page for accessing the 0Auth Login
*/
export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  render() {
    const { auth } = this.props
    return (
      <div className="root">
        <h2>
          <img src={asLogo} width="150px" height="168px" alt="AS Logo Icon" />
        </h2>
        <div style={{maxWidth: 150, maxHeight:50, margin: 'auto'}}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)} block>Login</Button>
        </div>
        <br/>
        <a width="150" height="50" href="https://auth0.com/?utm_source=oss&utm_medium=gp&utm_campaign=oss" target="_blank" alt="Single Sign On & Token Based Authentication - Auth0"><img width="150" height="50" alt="JWT Auth for open source projects" src="//cdn.auth0.com/oss/badges/a0-badge-light.png"/></a>
      </div>
    )
  }
}

export default Login;
