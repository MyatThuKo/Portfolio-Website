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
                            I am a dedicated student working towards my dream of becoming a software engineer at FAANG.
                        </p>
                        <h2><span>What I did and am currently doing</span></h2>
                        <p>
                            Currently, I am a software developer intern at <a href="https://wecodeucate.org/" target="_blank">Codeucate (Chicago, IL, USA)</a> and trying to solidify my knowledge on React and SwiftUI.
                            During the 2020 quarantine, I started learning React after attending a couple of virtual hackathons and
                            SwiftUI since I am a fan of Apple and one of my main goals is to become a software developer at Apple Inc. 
                        </p>
                        <h2><span>Family</span></h2>
                        <p>
                            I am the eldest sibling in my family and have one little sister.
                            My family acts as a big part of who I am and they play a major role in my life.
                            My dream is always to support them where my parents don't have to work after they turn 60 years old.
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
                                <span><a href="https://myatthuko.com/" target="_blank">https://www.myatthuko.com</a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <h2><span>Hobbies</span></h2>
                            <p className="hobbies">
                                <span> Playing basketball 🏀 </span> <br />
                                <span> Playing football/soccer ⚽️ </span> <br />
                                <span> Learning new programming languages 💻 </span> <br />
                                <span> Exploring new cultures and food 🍽 </span> <br />
                            </p>
                        </div>
                    </div>
                    <h2> Scroll down to see my <a className="smoothscroll" href="#resume">Resume</a> </h2>
                </div>
                <div className="two columns">
                    <img className="profile-pic" src="images/myanmar.png" alt="profile" />
                </div>
            </div>
        </section>
    )
}

export default about; 
