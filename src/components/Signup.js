import React from "react";
import './css/Signup.css';

const Signup = props => (
    <div className="signUp">
        
        <div className="rectangle">
            <div className = "niceToMeetYou">Nice to<br></br>Meet You</div>
        </div>
        <div className="rectangleRight">
            
            <div className = "rectangle_2">  
                <div className = "signUpWithGoogle">Sign up with Google</div>
                <div className = "newGoogleFavicon_512"/>
            </div>
            <div className = "facebookCircle_512"/>           
            <div className = "signUpWithFacebook">Sign up with Facebook</div>
            <div className = "or"> or </div>
        
            <div className = "rectangle_2_1 ">     
            </div>
            
            <div className = "rectangle_2_2 "/>    

            <div className="dontHaveAnAccount">
                Already have an account? <span className="sign-in-button">Log In</span>
            </div> 
        </div>
        <div className = "signUpWithEmail">Sign up with Email</div>
        <div className = "rectangle_2_2 "/>    

        <div className="dontHaveAnAccount">Already have an account?  </div>
    </div>
);

export default Signup;
