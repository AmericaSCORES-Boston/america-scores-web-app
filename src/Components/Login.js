import '../Login.css';
import React, { PropTypes as T } from 'react'
import AuthService from '../utils/AuthService'
import asLogo from '../Assets/aslogo.png'
import { Button }  from 'react-bootstrap'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  render() {
    const { auth } = this.props
    return (
      <div className="root">
        <h2 className="root">
          <img src={asLogo} width="150px" height="168px" alt="AS Logo Icon" />
        </h2>
        <h2>Login</h2>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
      </div>
    )
  }
}

export default Login;
