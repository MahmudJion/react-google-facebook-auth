import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const CLIENT_ID = 'YOUR CLIENT ID';

const GoogleBtn = () => {
  const [isLogined, setIsLogined] = useState(false);
  const [accessToken, setAccessToken] = useState('');

  const login = (response) => {
    if (response.accessToken) {
      setIsLogined(true);
      setAccessToken(response.accessToken);
    }
  };

  const logout = () => {
    setIsLogined(false);
    setAccessToken('');
  };

  const handleLoginFailure = (response) => {
    // alert('Failed to log in')
  };

  const handleLogoutFailure = (response) => {
    // alert('Failed to log out')
  };

  return (
    <div>
      {isLogined ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFailure}
        ></GoogleLogout>
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login with google"
          onSuccess={login}
          onFailure={handleLoginFailure}
          cookiePolicy={'single_host_origin'}
          responseType="code,token"
        />
      )}
      {accessToken ? <h5>Your Access Token: <br/><br/> {accessToken}</h5> : null}
    </div>
  );
};

export default GoogleBtn;
