import React from "react";
import './css/Login.css';

export const Login = props => {
    return (<div className="logIn">
            <div className="rectangle">
                <div className="welcomeBack">Welcome<br></br>Back</div>
            </div>
            <div className="rectangleRight">
                <button className="rectangle_2">
                    Log in with Google
                    <img src={require("../images/new-google-favicon-512.png")} alt="Google Favicon"></img>
                </button>

                <div className="or"> or</div>
                <button className="rectangle_2_1">Log in with Facebook <div className="facebookCircle_512"/></button>
                <div className="dontHaveAnAccount">
                    Don't have an account? <a href="./signup"><span className="sign-up-button">Sign Up</span></a>
                </div>
            </div>
            <div className="logInWithEmail">Log in with Email</div>
            <a href="./loginWithEmail">
                <button className="rectangle_2_2">Log in with e-mail</button>
            </a>
        </div>
    );
};

export default Login;
