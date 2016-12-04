import '../Login.css';
import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button, Jumbotron} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
import asLogo from '../Assets/aslogo.png'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }
  render() {
    const { auth } = this.props
    return (
      <div className="root">
        <Jumbotron>
        <h2 className="root">
          <img src={asLogo} width="150px" height="168px" alt="AS Logo Icon" />
        </h2>
        <h2>Login</h2>
        <ButtonToolbar className="toolbar">
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
        </ButtonToolbar>
        </Jumbotron>
      </div>
    )
  }
}

export default Login;
