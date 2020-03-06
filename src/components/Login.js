import React from "react";
import './Login.css';

const Login = props => (
    <div className="logIn">
        
        <div className="rectangle">
            <div className = "welcomeBack">Welcome<br></br>Back</div>
        </div>
        <div className="rectangleRight">
            
            <div className = "rectangle_2">  
                <div className = "logInWithGoogle">Log in with Google</div>
                <div className = "newGoogleFavicon_512"/>
            </div>
            <div className = "facebookCircle_512"/>           
            <div className = "logInWithFacebook">Log in with Facebook</div>
            <div className = "or"> or </div>
        
            <div className = "rectangle_2_1 ">     
            </div>
            <div className = "logInWithEmail">Log in with Email</div>
            <div className = "rectangle_2_2 "/>    

            <div className="dontHaveAnAccount">
                Don't have an account? <span className="sign-up-button">Sign Up</span>
            </div> 
        </div>
        
        
        


        

    </div>
);

export default Login;
