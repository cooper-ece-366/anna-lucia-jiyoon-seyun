import GoogleLogin from 'react-google-login';

const Login = () => {
    const responseGoogle = (response) => {
      console.log(response);
    }
    const styleSheet = {
        button: {
            background: "#C2B7A3",
            color: "white",
            border: "solid #781C10",
            fontFamily: "'Sen', sans-serif",
            height: "40px",
            width: "120px",
            marginLeft: "20px",
            padding: "0px",
            fontSize: "0.5em",
            borderRadius: "5px",
            cursor: "pointer",
            alignSelf: "center",
        }
    }

    return(
        <GoogleLogin
//            clientId="952972505853-d0ct4jna4kp5tolsm88vh55uo64p76ub.apps.googleusercontent.com"
//            buttonText="Login"
//            render={renderProps => (
//                <button style={styleSheet.button} onClick={renderProps.onClick} disabled={renderProps.disabled}>Login</button>)}
//            onSuccess={responseGoogle}
//            onFailure={() => { console.error("Login Failed!") }}
            cookiePolicy={'single_host_origin'}
          />
    )
}
export default Login;

