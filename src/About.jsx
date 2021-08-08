import React from "react"; 
import { NavLink } from "react-router-dom";

const About = () => {
return (
    <>
    <div className="my-3">
        <h3 className="text-center" >About Us</h3>
    </div>      
                <section className="chill left-right-section d-flex mg-lf-16px">

                <div className=" col-lg-60 order-lg-20 row-lg-300">
                    <img
                    src="https://www.michaelpage.co.in/sites/michaelpage.co.in/files/legacy/future_of_tech_bloggif.gif" alt="about"/>
                    </div>

                    <div className="margin-right-16px">
                        <h1><u>Coding is World </u>.</h1>

                        
<NavLink to="./Contact" className="btn btn-success text-align-center">
                            Register Now
                            </NavLink>
                    <h4>Coding is a list of step-by-step instructions that get computers to do what you want them to do. 
                        Coding makes it possible for us to create computer software, games, apps and websites. Coders, 
                        or programmers, are people who write the programmes behind everything we see...
Coding is used for communicating with computers. People use coding to give computers and other machines instructions on what actions to perform. 
Further, we use it to program the websites, apps, and other technologies we interact with every day.
</h4>
           </div>
                </section>
               
    </>
);
};

export default About;