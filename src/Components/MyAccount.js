import React, { Component } from 'react';
import icon from '../Assets/User-icon.png';
import AuthService from '../utils/AuthService'
import auth0 from 'auth0-js';
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
        this.state.accountData = {};
        this.exit=this.exit.bind(this);
        this.loginAuth = new AuthService();
    }
    componentDidMount(){

        let _this = this;
        _this.state.auth=this.props.auth;
    }

    componentWillMount(){
        let _this  = this;
        _this.state.accessToken=localStorage.getItem('access_token');
        _this.state.accountData= JSON.parse(localStorage.getItem('user'));
    }

    exit(){
        this.loginAuth.logout();
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
                        {/*{ renData( "Name:", this.state.accountData.name) }*/}
                        { renData( "Email:", this.state.accountData.name) }
                        { renData(  "NickName:", this.state.accountData.nickname) }
                        { renData(  "Last Login:", new Date(this.state.accountData.updated_at).toLocaleString()) }
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
