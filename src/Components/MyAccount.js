import React, { Component } from 'react';
import '../MyAccount.css';
import { AuthService } from '../utils/AuthService';
import icon from '../Assets/User-icon.png';
import Api from '../api';
import { PropTypes as T } from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import Auth0Lock from 'auth0-lock';


class MyAccountCompiler extends Component {	

static propTypes = {
    auth: T.instanceOf(AuthService),
    profile: T.object
  }

render() {
  const { auth } = this.props;
  const profile = auth.getProfile();

  function renData(constant, rdata) {
      console.log('calling rendata'); 
     return (<div><p><strong>{constant}</strong>{rdata}</p></div>)
  }; 

  const data = { name: "Alice", email: "alice@email.com", phone: 5036672134, password: "******"};
  
  return(		
    <div className="all">			
      <div className="Header">				
        <div className="Title">				
          <h1>My Account</h1>				
        </div>				
        <div className="PageIcon">				
          <img src={icon} alt="UserIcon" data-reactid=".0.0"/> 				
        </div>			
      </div>			
      <div className="dataMethod">
        { renData( "Name:", profile.name) }
        { renData("Email:", profile.email) }
        { renData( "Password:", "********") }
      </div>		
    </div>		
  );	

}
};

 export default MyAccountCompiler;


