import React from "react";
import './css/LogInWithEmail.css';

const logInWithEmail = (props) => {
    console.log(props);

    return (<div className="logInWithEmaill">
            <div className="rectangle">
                <div className="welcomeBack">Welcome<br></br>Back</div>
            </div>
            <div className="rectangleRight">
                <form action="#">
                    <div className="emailInput">
                        <input type="email" placeholder="Email" className="email" required/>
                    </div>
                    <div className="emailLine"/>
                    <div className="passwordInput">
                        <input type="password" placeholder="Password" className="passcode" required/>
                    </div>
                    <div className="passwordLine"/>
                    <div className="forgotYourPassword">Forgot your password?</div>
                    <input type="submit" className="loginButton" value="Log in"/>
                </form>
                <div className="dontHaveAnAccount">
                    Don't have an account? <a href="./signup"><span className="sign-up-button">Sign Up</span></a>
                </div>
            </div>
        </div>
    );
};

export default logInWithEmail;
