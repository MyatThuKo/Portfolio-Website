import React from 'react';

export const about = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="profile" />
                </div>
                <div className="seven columns main-col">
                    <h2><span>About Me</span></h2>
                    <div className="bio">
                        <p>
                            Hey there, I am Myat Thu Ko, people call me Tony. I am a computer science student, residing in New York, NY, and
                            am originally from<a href="https://en.wikipedia.org/wiki/Myanmar" target="_blank"> Myanmar</a>.
                            I am mainly interested in web and mobile development.
                        </p>
                        <h2><span>What I did and am currently doing</span></h2>
                        <p>
                            Currently, I am interning as a software developer at <a href="https://wecodeucate.org/" target="_blank">Codeucate (Chicago, IL, USA)</a> and trying to solidify my knowledge on React.js and SwiftUI.
                            I am also doing Google IT Automation with Python Professional Certificate program in Coursera to gain knowledge on Python.
                            During the 2020 quarantine, I had my first React.js experience from virtual hackathons and built this portfolio website using it.
                        </p>
                        <h2><span>Interests</span></h2>
                        <p>
                            I am always interested in visiting different countries around the world mainly to learn about their culture and food.
                            Soccer is my most favorite sport and I always enjoy watching the games. My favorite soccer team is Manchester United F.C.
                        </p>
                    </div>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2><span>Contact Details</span></h2>
                            <p className="address">
                                <span>Myat Thu Ko</span><br />
                                <span>New York, Ny</span><br />
                                <span>(347)707-3462</span><br />
                                <span> <a href="mailto:nymyatthuko@gmail.com"> nymyatthuko@gmail.com </a></span> <br />
                            </p>
                        </div>
                        <div className="columns download">
                            <h2><span>Interests</span></h2>
                            <p className="hobbies">
                                <span> Basketball 🏀 </span> <br />
                                <span> Football or Soccer ⚽️ </span> <br />
                                <span> Gaming 💻 </span> <br />
                                <span> Cultures and Food 🍽 </span> <br />
                                <span> Meditation 🧘‍♂️ </span> <br />
                                <span> Music 𝄞 </span> <br />
                            </p>
                        </div>
                    </div>
                    <h2> Scroll down to see my <a className="smoothscroll" href="#resume">Resume</a> </h2>
                </div>
                <div className="two columns">
                    <img className="profile-pic" src="https://img.icons8.com/color/900/000000/myanmar-circular.png" alt="myanmar" />
                </div>
            </div>
        </section>
    )
}

export default about; 
