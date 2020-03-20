import React from "react";
import './css/Signup.css';

const Signup = props => (
    <div className="signUp">
        
        <div className="rectangleSignUp">
            <div className = "niceToMeetYou">Nice to<br></br>Meet You</div>
        </div>
        <div className="rectangleRightSignUp">
            
            <div className = "rectangle_2SignUp">  
                <div className = "signUpWithGoogle">Sign up with Google</div>
                <div className = "newGoogleFavicon_512"/>
            </div>
            <div className = "facebookCircle_512"/>           
            <div className = "signUpWithFacebook">Sign up with Facebook</div>
            <div className = "or"> or </div>
        
            <div className = "signUpWithEmail">Sign up with e-mail</div>
            <div className = "rectangle_2_1SignUp ">     
            </div>
            
            <div className = "rectangle_2_2SignUp "/>    

            <div className="alreadyHaveAnAccount">
                Already have an account? <a href="./login"><span className="sign-in-button">Log In</span></a>
            </div> 
        </div>
        
       

       
    </div>
);

export default Signup;
