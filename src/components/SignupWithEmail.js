
import React from "react";
import './css/SignupWithEmail.css';


const SignupWithEmail = props => (
    <div className="signUp">
        
        <div className="rectangleSignUp">
            <div className = "niceToMeetYou">Nice to<br></br>Meet You</div>
        </div>
        <div className="rectangleRight">

            <form action="#">
                <div className="nickInput">
            
                     <input type="text" placeholder="Nickname" name="Nickname" required/>
        
                </div>
                <div className = "nickLine"/>

                <div className="emailInput">
            
                    <input type="email" placeholder="Email" name="email" required/>
                
                </div>

                <div className="emailLine"/>
                    <div className="passwordInput">
                
                        <input type="password" placeholder="Password" name="passcode" required/>
                
                    </div>
                    <div className="passwordLine"/> 

                <div className="studentIdInput">
            
                    <input type="number" placeholder="Student ID" name="StudentID" required/>

                </div> 
                <div className = "studentIdLine"/>
            
            </form>  

            <div className="alreadyHaveAnAccount">
                Already have an account? <a href="./login"><span className="sign-in-button">Log In</span></a>
            </div> 
        </div>

      
    </div>
);

export default SignupWithEmail;

