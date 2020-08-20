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
                            <h3>City College of New York, CUNY</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">B.S. Degree in Computer Science <br /> <em className="date">August 2020 - Present</em></p>
                            <p style={{ textAlign: 'left' }}>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Borough of Manhattan Community College, CUNY</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">A.S. Degree in Computer Science <br /> <em className="date">August 2017 - May 2019</em></p>
                            <p className="info"> GPA - 3.955 <span>•</span> Degree awarded on May 31, 2020 <span>•</span> Graduated with Honors </p>
                            <p style={{ textAlign: 'left' }}>
                                <li> Out in Two Scholarship recipient</li>
                                <li> Abner B. Rosenfield Award for Outstanding Scholarship recipient </li>
                                <li> Dean List (Fall 2017 - Spring 2019) </li>
                                <li> Phi Theta Keppa Honor Society Member </li>
                                <li> President of Out in Two Club (Spring 2019) </li>
                                <li> Secretary of Out in Two Club (Fall 2018) </li>
                            </p>
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
                            <h3><a href="https://wecodeucate.org/" target="_blank">Codeucate</a></h3>
                            <h5 className="location"> Remote </h5>
                            <p className="info">Software Developer <span>•</span> <em className="date"> August 2020 - Present </em></p>
                            <p className="info">Frontend Developer Intern <span>•</span> <em className="date">17 July, 2020 - 14 August, 2020</em></p>
                            <p style={{ textAlign: 'left' }}>
                                <li> Build web pages that are responsive and user-friendly using React.js </li>
                                <li> Act as a liaison between the general Frontend Team and the other frontend and backend teams, and working with both the interactivity and layout team to implement features </li>
                                <li> Support other team members with building necessary web pages and fixing the bugs in the website </li>
                                <li> Collaborate with the backend team to ensure the website is functioning well and efficiently </li>
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Apple Fifth Ave.</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">Specialist <span>•</span> <em className="date"> 5 October, 2019 - 16 July, 2020 </em></p>
                            <p style={{ textAlign: 'left' }}>
                                <li> Performed basic troubleshooting on iOS devices and MacOS Computers  </li>
                                <li> Provided concrete customer service and support of all standard Apple applications and hardware including hardware resets, password resets/setup, account setups, iCloud, iTunes and App Store walkthrough  </li>
                                <li> Delivered exceptional customer service while maintaining a high degree of professionalism </li>
                                <li> Discovered potential business customers and connect them with the business team </li>
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
                            <li><span className="bar-expand time-management" /><em>Time Management</em></li>
                            <li><span className="bar-expand teamwork" /><em>Team Work</em></li>
                        </ul>
                    </div>
                </div>
                <div className="four columns header-col">
                    <h2><span>Technical Skills</span></h2>
                    <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand html5" /><em>HTML5</em></li>
                            <li><span className="bar-expand css" /><em>CSS</em></li>
                            <li><span className="bar-expand cpp" /><em>C++</em></li>
                            <li><span className="bar-expand swiftui" /><em>SwiftUI</em></li>
                            <li><span className="bar-expand react" /><em>React.js</em></li>
                            <li><span className="bar-expand python" /><em>Python</em></li>
                        </ul>
                    </div>
                </div>
                <div className="four columns header-col">
                    <h2><span>Languages</span></h2>
                    <div className="flags">
                        <img src="/images/english.png" className="language-flag" alt="English" />
                        <p>
                            English
                        </p>
                        <br />
                        <img src="/images/myanmar.png" className="language-flag" alt="Myanmar" />
                        <p>
                            Myanmar (Burmese)
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default resume; 
