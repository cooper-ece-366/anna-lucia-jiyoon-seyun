import React from 'react';
import GoogleLogin from 'react-google-login';

//Coded by: Lucia Rhode
//Button Design by: Jiyoon Pyo
const Login = () => {
    const responseGoogle = (response) => {
      console.log(response);
      localStorage.setItem('login_token', response.tokenId);
      window.location.reload();
    }

    const Logout = () => {
        localStorage.removeItem('login_token');
        window.location.reload();
    }

    if (window.localStorage.getItem("login_token") === null) {
        return (
            <GoogleLogin
                clientId="952972505853-d0ct4jna4kp5tolsm88vh55uo64p76ub.apps.googleusercontent.com"
                buttonText="Login"
                render={renderProps => (
                    <button className="mr-[35px] hover:bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]" onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>)}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        )
    }

    return(
        <button className="mr-[35px] hover:bg-[#232A4E] border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]" onClick={Logout}>Logout</button>
    )
}
export default Login;
