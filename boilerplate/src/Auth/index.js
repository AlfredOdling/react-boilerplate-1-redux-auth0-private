import Auth0Lock from 'auth0-lock';
import history from '../history';

export default class Auth {

  lock = new Auth0Lock('4A1Rt3SiOnzFXkz4f6hWbexbFQ12MKzX', 'polymath.auth0.com', {
    autoclose: true,
    auth: {
      redirectUrl: '',
      responseType: 'token',
      params: {
        scope: 'openid user_metadata'
      }
    }
  });


  constructor() {
    this.handleAuthentication();
    // binds functions to keep this context
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  handleAuthentication() {
    // Add a callback for Lock's `authenticated` event
    this.lock.on('authenticated', (data)=>{
      
      this.lock.hide()
      this.setSession(data)
    });
    // Add a callback for Lock's `authorization_error` event
    this.lock.on('authorization_error', (err) => {
      console.log(err);
      alert(`Error: ${err.error}. Check the console for further details.`);
      // history.replace('/login');
    });
  }

  setSession = (authResult) => {
    console.log('got session')
    console.log(authResult)
    if (authResult && authResult.accessToken) {
      this.lock.hide();

      // Set the time that the access token will expire at
      // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
      localStorage.setItem('access_token', authResult.accessToken);
      localStorage.setItem('id_token', authResult.idToken);

      // localStorage.setItem('expires_at', expiresAt);
      // navigate to the home route
      history.replace('/user');
    }
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // navigate to the home route
    // history.replace('/login');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = localStorage.getItem('access_token');
    if (expiresAt){
      return true
    } else {
      return false
    }
  }
}
