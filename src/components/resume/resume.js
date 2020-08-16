import React from 'react'

export const resume = () => {
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>City College of New York, CUNY</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">B.S. Degree in Computer Science <br /> <em className="date">August 2020 - Present</em></p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                            </p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Borough of Manhattan Community College, CUNY</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">A.S. Degree in Computer Science <br /> <em className="date">August 2017 - May 2019</em></p>
                            <p className="info"> GPA - 3.955 <span>•</span> Degree awarded on May 31, 2020 <span>•</span> Graduated with Honors </p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            <h3><a href="https://wecodeucate.org/" target="_blank">Codeucate</a></h3>
                            <h5 className="location"> Remote </h5>
                            <p className="info">Software Developer <span>•</span> <em className="date"> August 2020 - Present </em></p>
                            <p className="info">Frontend Developer Intern <span>•</span> <em className="date">17 July, 2020 - 14 August, 2020</em></p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                            </p>
                        </div>
                    </div>
                    <div className="row item">
                        <div className="twelve columns">
                            <h3>Apple Fifth Ave.</h3>
                            <h5 className="location"> New York, NY </h5>
                            <p className="info">Specialist <span>•</span> <em className="date"> 5 October, 2019 - 16 July, 2020 </em></p>
                            <p>
                                This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row skill">
                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                    </p>
                    <div className="bars">
                        <ul className="skills">
                            <li><span className="bar-expand photoshop" /><em>C++</em></li>
                            <li><span className="bar-expand illustrator" /><em>SwiftUI</em></li>
                            <li><span className="bar-expand wordpress" /><em>React.js</em></li>
                            <li><span className="bar-expand css" /><em>CSS</em></li>
                            <li><span className="bar-expand html5" /><em>HTML5</em></li>
                            <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default resume; 
