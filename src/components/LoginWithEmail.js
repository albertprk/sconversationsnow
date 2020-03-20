import React from "react";
import './css/LogInWithEmail.css';

const logInWithEmail = props => (
    <div className="logInWithEmaill">
        
    <div className="rectangle">
        <div className = "welcomeBack">Welcome<br></br>Back</div>
    </div>
    <div className="rectangleRight">
    <form action="#">
        <div className="emailInput">
            <input type="text" placeholder="Email" name="email" required/>
        </div>
        <div className="emailLine"/>
        <div className="passwordInput">
            <input type="password" placeholder="Password" name="passcode" required/>
        </div>
        <div className="passwordLine"/> 
        <input type="submit" class="loginButton" value="Log in"/>
    </form>
        <div className="dontHaveAnAccount">
            Don't have an account? <a href = "./signup"><span className="sign-up-button">Sign Up</span></a>
        </div> 
    </div>   
</div>
);

export default logInWithEmail;
