import { EventEmitter } from 'events'
import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import auth0 from 'auth0-js';

/*
The auth service is what connects this app to 0Auth
*/
export default class AuthService extends EventEmitter {

    lock = new auth0.WebAuth({
        domain: 'asbadmin.auth0.com',
        clientID: 'F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz',
        redirectUri: `${window.location.origin}/Login`,
        audience: 'https://asbadmin.auth0.com/api/v2/',
        responseType: 'token id_token',
        scope: 'openid profile app_metadata user_metadata user_id',
    });

    constructor() {
        super();
        this._doAuthentication=this._doAuthentication.bind(this);
        this._authorizationError=this._authorizationError.bind(this);
        this.login = this.login.bind(this);
    }

    _doAuthentication(){
        if(window.location.hash){
            this.lock.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setToken(authResult.idToken,authResult.accessToken)

                    this.lock.client.userInfo(authResult.accessToken,function(err, user) {
                        // Now you have the user's information
                        if(user){
                            localStorage.setItem('user',JSON.stringify(user));
                        }
                        browserHistory.replace('/MyAccount');
                    });

                } else if (err) {
                    browserHistory.replace('/Login');
                    console.log(err);
                }
            });

        } else{
            console.log('window.location.hash is empty')
        }

    }



    _authorizationError(error){
        // Unexpected authentication error
        console.log('Authentication Error', error)
    }

    login() {
        // Call the show method to display the widget.
        this.lock.authorize();
    }

    loggedIn(){
        // Checks if there is a saved token and it's still valid
        return !!this.getToken()
    }

    setToken(idToken,accessToken){
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
        localStorage.setItem('access_token', accessToken)
    }

    getToken(){
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    logout(){
        // Clear user token and profile data from localStorage
        this.lock.logout({
            returnTo:`${window.location.origin}/Login`,
            clientID: 'F8iBVF34KoTqGgOd4fj5D6IRSax8JWxz'
        })
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
    }
}
