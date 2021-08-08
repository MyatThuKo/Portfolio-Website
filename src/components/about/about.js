import React from 'react';
import firebase from '../about/firebase.png';
import mongodb from '../about/mongo.png';

export const about = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="two columns">
                    <img className="profile-pic" src="images/profilepic.jpg" alt="profile" />
                </div>
                <div className="eight columns main-col">
                    <h2><span>About Me</span></h2>
                    <div className="bio">
                        <p>
                            Hey there, I am Myat Thu Ko!! Thank you for visiting my portfolio.
                            I am an international student from<a href="https://en.wikipedia.org/wiki/Myanmar" target="_blank"> Myanmar</a>,
                            studying Computer Science at <a href="https://www.ccny.cuny.edu/" target="_blank">City College of New York</a>.
                            I am residing at Brooklyn, NY and
                        </p>
                        <h2><span>What I did and am currently doing</span></h2>
                        <p>
                            I am currently taking "Interview Prep Course" from CodePath and
                            learning SwiftUI by taking cs193p course from Stanford and 100 Days of SwiftUI challenge from Hacking with Swift. I am
                            also building and preparing a platform where we will be providing free educational resources and courses to students in Myanmar.
                            During Spring 2021, I graduated from CodePath's iOS Course at City College of New York with honors and MLH Fellowship (Explorer Track).
                        </p>
                    </div>
                    <h2><span>Interests</span></h2>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="container-about">
                            <div className="container">
                                <h5>Programming Language </h5>
                                <div className="icon-container">
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/c-plus-plus-logo.png" alt="C++" />
                                        <p className="icon-name">C++</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/python.png" alt="python" />
                                        <p className="icon-name">Python</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/swift.png" alt="swift" />
                                        <p className="icon-name">Swift</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/html-5.png" alt="html" />
                                        <p className="icon-name">HTML</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/css3.png" alt="css" />
                                        <p className="icon-name">CSS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <h5>Framework</h5>
                                <div className="icon-container">
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/react.png" alt="react.js" />
                                        <p className="icon-name">React.js</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/swiftui.png" alt="swiftui" />
                                        <p className="icon-name">SwiftUI</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <h5>Database</h5>
                                <div className="icon-container">
                                    <div className="icon">
                                        <img src={firebase} height="30" width="30" alt="firebase" />
                                        <p className="icon-name">Firebase</p>
                                    </div>
                                    <div className="icon">
                                        <img src={mongodb} height="30" width="30" alt="mongodb" />
                                        <p className="icon-name">MongoDB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <div className="container-about">
                            <div className="container">
                                <h5>Sports</h5>
                                <div className="icon-container">
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/basketball.png" alt="basketball" />
                                        <p className="icon-name">Basketball</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/football2.png" alt="football" />
                                        <p className="icon-name">Soccer</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/badminton.png" alt="badminton" />
                                        <p className="icon-name">Badminton</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/swimming.png" alt="swimming" />
                                        <p className="icon-name">Swimming</p>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <h5>Personal Wellness</h5>
                                <div className="icon-container">
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/walking.png" alt="walking" />
                                        <p className="icon-name">Walking</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/meditation-guru.png" alt="meditation" />
                                        <p className="icon-name">Meditation</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/easy-listening.png" alt="music" />
                                        <p className="icon-name">Music</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/meal.png" alt="eating" />
                                        <p className="icon-name">Healthy Diet</p>
                                    </div>
                                    <div className="icon">
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/communication.png" alt="communication" />
                                        <p className="icon-name">Networking</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                            <h2><span>Download Resume</span></h2>
                            <div className="row">
                                <div className="four columns">
                                    <a href="https://drive.google.com/file/d/1tnRzbCS-H4yG-w9sLuJLleKahc18S69e/view?usp=sharing" target="_blank">
                                        <img src="https://img.icons8.com/clouds/100/000000/pdf.png" alt="pdf download" />
                                    </a>
                                    PDF Download
                                </div>
                                <div className="four columns">
                                    <a href="https://drive.google.com/file/d/1TQKAuVVGSpPq7VW7rjbKL59A16i-hrai/view?usp=sharing" target="_blank">
                                        <img src="https://img.icons8.com/clouds/100/000000/ms-word.png" alt="doc download" />
                                    </a>
                                    Word Doc Download
                                </div>
                                <div className="four columns">
                                    <a href="https://github.com/MyatThuKo/" target="_blank">
                                        <img src="https://img.icons8.com/clouds/100/000000/github.png" alt="github" />
                                    </a>
                                    GitHub
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2> Scroll down to see my <a className="smoothscroll" href="#resume">Resume</a> </h2>
                </div>
                <div className="two columns">
                    <img className="profile-pic" src="https://img.icons8.com/color/900/000000/myanmar-circular.png" alt="myanmar" />
                </div>
            </div>
        </section >
    )
}

export default about;