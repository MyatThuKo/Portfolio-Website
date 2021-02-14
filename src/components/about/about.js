import React from 'react';
import firebase from '../about/firebase.png'

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
                            Currently, I am participating in <a href="https://fellowship.mlh.io/" target="_blank">Major League Hacking Fellowship</a> (Explorer Track) where
                            I will be spending 20 hours a week, collaborating with 15 team members to explore new technologies to build portfolio projects. I am also taking an iOS Course
                            offered by <a href="https://codepath.org/" target="_blank">CodePath</a>. In this program, I will be building iOS applications using Swift (Storyboard).
                        </p>
                        <h2><span>Interests</span></h2>
                        <p className="hobbies">
                            <div className="row">
                                <div className="four columns">
                                    <h5>Programming Tools</h5>
                                    <div>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/ios-logo.png" alt="ios" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/swift.png" alt="swift" /> <span></span>
                                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/react.png" alt="react.js" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/python.png" alt="python" /> <span></span>
                                        {/* <img src="https://img.icons8.com/ios-filled/30/ffffff/web.png" alt="web-dev" /> <span></span> */}
                                        <img src={firebase} height="30" width="30" alt="firebase" />
                                    </div>
                                </div>
                                <div className="four columns">
                                    <h5>Sports</h5>
                                    <div>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/basketball.png" alt="basketball" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/football2.png" alt="football" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/badminton.png" alt="badminton" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/swimming.png" alt="swimming" /> <span></span>
                                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/table-tennis.png" alt="table-tennis" /> <span></span>
                                    </div>
                                </div>
                                <div className="four columns">
                                    <h5>Personal Wellness</h5>
                                    <div>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/walking.png" alt="walking" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/meditation-guru.png" alt="meditation" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/easy-listening.png" alt="music" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/meal.png" alt="eating" /> <span></span>
                                        <img src="https://img.icons8.com/ios-filled/30/ffffff/communication.png" alt="communication" /> <span></span>
                                    </div>
                                </div>
                            </div>
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
                            <h2><span>Download Resume</span></h2>
                            <div className="row">
                                <div className="four columns">
                                    <a href="https://drive.google.com/file/d/1eLMwfcyyG2me-8RJ-IAFExKSi_XYrrVh/view?usp=sharing" target="_blank">
                                        <img src="https://img.icons8.com/clouds/100/000000/pdf.png" alt="pdf download" />
                                    </a>
                                    PDF Download
                                </div>
                                <div className="four columns">
                                    <a href="https://drive.google.com/file/d/1M2ImGEIBxmyH1z3Tewpf5xkn6G6i27nk/view?usp=sharing" target="_blank">
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
        </section>
    )
}

export default about; 
