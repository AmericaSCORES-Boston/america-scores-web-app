 import React, { Component } from 'react';
 import icon from '../Assets/User-icon.png';
 import AuthService from '../utils/AuthService'
 /*
 This page is meant to view details of the account
 */
 class MyAccountCompiler extends Component {
     constructor(props){
         super(props);
         this.state={
             accessToken:" ",
             accountData:{},
             auth:{}
         }
         this.exit=this.exit.bind(this);
     }
    componentDidMount(){
        let _this = this;
        this.state.auth=this.props.auth;
        this.state.accessToken=localStorage.getItem('access_token');
        fetch('https://asbadmin.auth0.com/userinfo/?access_token='+this.state.accessToken)
            .then(results => {
                   return results.json()
        }).then( (data) => {

            _this.setState({
                accountData : {
                    email: data.email,
                    nickname: data.nickname,
                    name: data.name,
                    username: data.username
                }
            })
        });
    }
    exit(){
        const auth = new AuthService('F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz', 'asbadmin.auth0.com');
        auth.logout();
        window.location.reload(true);
    }

 render() {
        let _this=this;
   function renData(constant, rdata) {
      return (<div><p><strong>{constant}</strong> {rdata}</p></div>)
   };

   return(
       <div className="all">
         <div className="Header">
         <div className="Title">
         <h1>My Account</h1>
         </div>

        </div>
        <div className="row">
         <img src={icon} alt="UserIcon" data-reactid=".0.0" width='150' height='150'/>

    <div className="col-md-5 dataMethod">
         { renData( "Name:", this.state.accountData.name) }
         { renData( "Email:", this.state.accountData.email) }
         { renData(  "NickName:", this.state.accountData.nickname) }
         { renData(  "Username:", this.state.accountData.username) }
     </div>
         <div className="download-elements">
             <button onClick={this.exit}>Logout</button>
             </div>
         </div>
     </div>
   );
 }
 }
 export default MyAccountCompiler;
