 import React, { Component } from 'react';
 import icon from '../Assets/User-icon.png';

 /*
 This page is meant to view details of the account
 */
 class MyAccountCompiler extends Component {

     constructor(props){
         super(props);
         this.state={
             accessToken:" ",
             accountData:{}
         }
     }
    componentDidMount(){
        // let accountInfo= [];
        let _this = this;
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
 render() {
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
         <div className="text-center">
             <img src={icon} alt="UserIcon" data-reactid=".0.0"/>
         </div>
       <div className="dataMethod">
         { renData( "Name:", this.state.accountData.name) }
         { renData( "Email:", this.state.accountData.email) }
         { renData(  "NickName:", this.state.accountData.nickname) }
         { renData(  "Username:", this.state.accountData.username) }
       </div>
     </div>
   );

 }
 }
 export default MyAccountCompiler;
