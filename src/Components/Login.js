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
  constructor(){
      super()
      this.loginAuth = new AuthService();
      this.loginAuth._doAuthentication()

  }
  render() {
    const { auth } = this.props
    return (
      <div className="root">
          <div className="page-header text-center">
              <h1>Welcome</h1>
          </div>
       <div className="text-center" style={{width: 160, height: 200,margin: 'auto'}}>
          <img src={asLogo} width="150px" height="168px"  alt="AS Logo Icon" />
       </div>
        <div style={{maxWidth: 150, maxHeight:50, margin: 'auto'}}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)} block>Continue</Button>
        </div>
        <br/>
      </div>
    )
  }
}

export default Login;
