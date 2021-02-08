import React from 'react'

export const resume = () => {
    return (
        <section id="resume">
            <h1><span>Resume</span></h1>
            <div className="row education">
                <div className="three columns header-col">
                    <h2><span>Education</span></h2>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>City College of New York, CUNY</u></h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">B.S. in Computer Science <br /> <em className="date">August 2020 - Present</em></p>
                            <p className="info"> GPA - 3.86/4.0 <span>•</span> Expected graducation in May 2022 </p>
                            <p className="courses">
                                Relevant Coursework - Algorithms <span className="lan">(C++)</span>
                                | Intro to Programming <span className="lan">(Python)</span>
                                | <br /> Writing for Engineering
                            </p>
                            <p style={{ textAlign: 'left' }}>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>Borough of Manhattan Community College, CUNY</u></h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">A.S. in Computer Science <br /> <em className="date">August 2017 - May 2019</em></p>
                            <p className="info"> GPA - 3.96/4.0 <span>•</span> Degree awarded on May 31, 2020 <span>•</span> Graduated with Honors </p>
                            <p className="courses">
                                Relevant Coursework - Software Development <span className="lan">(HTML/CSS/PHP)</span>
                                | Data Structure <span className="lan">(C++)</span>
                                | Calculus 1, 2, 3
                            </p>
                            <p style={{ textAlign: 'left' }}>
                                <li> Out in Two Scholarship recipient</li>
                                <li> Abner B. Rosenfield Award for Outstanding Scholarship recipient </li>
                                <li> Dean's List (Fall 2017 - Spring 2019) </li>
                                <li> Phi Theta Keppa Honor Society Member </li>
                                <li> President (Spring 2019) & Secratary (Fall 2018) of Out in Two Club, an academic club focusing and helping on Out in Two scholars’ growth, network, and transfer process </li>
                            </p>
                        </div>
                    </div>

                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u><a href="https://codepath.org" target="_blank">CodePath iOS Course</a></u></h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info"> Spring 2021  <br /> <em className="date">January 2021 - May 2021</em></p>
                            <p style={{ textAlign: 'left' }} className="courses">
                                Language used: <span className="lan"> Swift Storyboard </span>
                                <br />Relevant Topics:
                                <li> Views and View Controllers - View controller lifecycle, Using common views (buttons, labels, images) and Using table views and collection views</li>
                                <li> Auto Layout - Basic Auto Layout and Auto Layout and table views</li>
                                <li> Navigation - Modal and push navigation, Tab bar controllers and Passing data between view controllers</li>
                                <li> Animation and Gestures - Lottie Animations and SkeletonViews</li>
                                <li> Networking Sending network requests, Downloading and caching remote images and Using Parse as a back-end</li>
                            </p>
                        </div>
                    </div>

                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>Major League Hacking (MLH) Fellowship</u></h3>
                            <h4><i>Explorer Fellow</i></h4>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info"> Spring 2021  <br /> <em className="date">February 2021 - April 2021</em></p>
                            <p style={{ textAlign: 'left' }} className="courses">
                                <li> Collaborate and explore new technologies to build portfolio projects </li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row certificates">
                <div className="three columns header-col">
                    <h2><span>Certificates</span></h2>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <ul style={{ textAlign: 'left' }} className="google-python">
                                <li>Crash Course on Python <a href="https://coursera.org/share/6344d6059e457649bd55f19744ea8fd3" target="_blank">(See Certificate)</a> </li>
                                <li> Introduction to Git and GitHub <a href="https://www.coursera.org/account/accomplishments/certificate/HM46REP9H22C" target="_blank">(See Certificate)</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h2><span>Work</span></h2>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>Pantsuit Professionals</u></h3>
                            <h5 className="location"> New York, NY (Remote) </h5>
                            <p className="info"> iOS Developer Intern <span>•</span> <em className="date">28 September, 2020 - Present</em></p>
                            <p className="description">
                                <li> Work closely on UI/UX design with the iOS Engineering teams </li>
                            </p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u><a href="https://wecodeucate.org/" target="_blank">Codeucate</a></u></h3>
                            <h5 className="location"> Chicago, IL (Remote) </h5>
                            <p className="info">Software Developer Intern <span>•</span> <em className="date">17 July, 2020 - 31 December 2020</em></p>
                            <p className="description">
                                <li> Migrated a WordPress website to a responsive and user-friendly multi-page HTML website using React.js framework </li>
                                <li> Acted as a liaison between the front-end and back-end teams and worked with both the interactivity and layout teams to implement features such as animation, bootstrap, and PayPal/Zoom APIs </li>
                                <li> Supported team members in building core web pages and fixing bugs in the website </li>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>Apple Inc. - Apple Fifth Ave Store</u></h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">Specialist <span>•</span> <em className="date"> 5 October, 2019 - 16 July, 2020 </em></p>
                            <p className="description">
                                <li> Collaborated with Technical Specialist from Genius Bar to execute basic troubleshooting on iOS devices and macOS computers  </li>
                                <li> Approached potential customers and identified customer needs and preferences in a fast-paced environment </li>
                                <li> Obtained outstanding performance feedback from leadership team for professionalism and exceptional customer service </li>
                                <li> Provided support of all standard Apple applications and hardware, including hardware resets, password resets/setup, account setups, iCloud, iTunes, and App Store walkthroughs </li>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><u>Borough of Manhattan Community College, CUNY</u></h3>
                            <h5 className="location"> New York, NY</h5>
                            <p className="info">College Assistant <span>•</span> <em className="date">01 January, 2018 - 22 May, 2019</em></p>
                            <p className="description">
                                <li> Conducted and verified all software systems to be used for the CUNY Assessment Tests in the testing labs  </li>
                                <li> Partnered with the supervisors to test run newly installed software in the testing lab computers for the CUNY Assessments </li>
                                <li> Monitored students during the CUNY Assessment Tests, and verified students’ information on the CUNYFirst </li>
                                <li> Organized and prepared test materials, office documents, and office inventory </li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row skill">
                <div className="four columns header-col">
                    <h2><span>Soft Skills</span></h2>
                    <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand communication" /><em>Communication</em></li>
                            <li><span className="bar-expand problem-solving" /><em>Problem Solving</em></li>
                            <li><span className="bar-expand adaptability" /><em>Adaptability</em></li>
                            <li><span className="bar-expand quick-learning" /><em>Quick Learning</em></li>
                            <li><span className="bar-expand teamwork" /><em>Team Work</em></li>
                            <li><span className="bar-expand time-management" /><em>Time Management</em></li>
                        </ul>
                    </div>
                </div>
                <div className="four columns header-col">
                    <h2><span>Technical Skills</span></h2>
                    <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand python" /><em>Python </em></li>
                            <li><span className="bar-expand cpp" /><em>C++</em></li>
                            <li><span className="bar-expand html5" /><em>HTML5</em></li>
                            <li><span className="bar-expand swiftui" /><em>SwiftUI</em></li>
                            <li><span className="bar-expand css" /><em>CSS</em></li>
                            <li><span className="bar-expand react" /><em>React.js</em></li>
                        </ul>
                    </div>
                </div>
                <div className="four columns header-col">
                    <h2><span>Languages</span></h2>
                    <div className="flags">
                        <img className="language-flag" src="https://img.icons8.com/color/900/000000/myanmar-circular.png" alt="myanmar" />
                        <p>
                            Burmese (Native)
                        </p>
                        <br />
                        <img src="https://img.icons8.com/color/900/000000/usa-circular.png" className="language-flag" alt="English" />
                        <p>
                            English (Fluent)
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default resume; 
