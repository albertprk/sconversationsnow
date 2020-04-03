import React from "react";
import './css/LogInWithEmail.css';

const logInWithEmail = (props) => {

    /*handleSubmit((e) => {
        e.preventDefault();
    });*/

    return (<div className="logInWithEmaill">
            <div className="rectangle">
                <div className="welcomeBack">Welcome<br></br>Back</div>
            </div>
            <div className="rectangleRight">
                <form action="/example" method="POST">
                    <div className="emailInput">
                        <input type="email" placeholder="Email" name="email" required/>
                    </div>
                    <div className="emailLine"/>
                    <div className="passwordInput">
                        <input type="password" placeholder="Password" name="password" required/>
                    </div>
                    <div className="passwordLine"/>
                    <div className="forgotYourPassword">Forgot your password?</div>
                    <input type="submit" class="loginButton" value="Log in"/>
                </form>
                <div className="dontHaveAnAccount">
                    Don't have an account? <a href="./signup"><span className="sign-up-button">Sign Up</span></a>
                </div>
            </div>
        </div>
    );
};

export default logInWithEmail;
