import React from "react";
import './css/LogInWithEmail.css';

const logInWithEmail = props => (
    <div className="logInWithEmaill">
        
    <div className="rectangle">
        <div className = "welcomeBack">Welcome<br></br>Back</div>
    </div>
    <div className="rectangleRight">
        <div className="emailInput">
            <form action="#">
            <input type="text" placeholder="Email" name="email" required/>
                </form>
            </div>
        <div className="emailLine"/>
            <div className="passwordInput">
                <form action="#">
                    <input type="password" placeholder="Password" name="passcode" required/>
                </form>
            </div>
        <div className="passwordLine"/> 
        <div className="loginButton">Log in</div>    

        <div className="dontHaveAnAccount">
            Don't have an account? <a href = "./signup"><span className="sign-up-button">Sign Up</span></a>
        </div> 
    </div>   
</div>
);

export default logInWithEmail;
