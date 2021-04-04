import React, { Component } from 'react';
import CountUp from 'react-countup';
import greeting from "../header/greeting.gif";

export default class Header extends Component {
    constructor() {
        super();
        var startDate = new Date().getTime() - new Date("February 1, 2021");    // Future date - current date
        var difference = Math.floor(startDate / (1000 * 60 * 60 * 24));
        console.log(difference);

        this.state = {
            currentDate: difference
        }
    }

    render() {
        let resumeData = this.props.resumeData;
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <img src="images/myanmar-background.jpeg" alt="backgroundImage" />
                        <h1 className="responsive-headline">Greeting, I'm {resumeData.nickname}.</h1>
                        <h1 className="responsive-headline">({resumeData.name})</h1>
                        <h2>International student from <a href="https://www.google.com/search?q=myanmar" target="_blank">Myanmar</a></h2>
                        <h3 className="header-bio">
                            {/* I am an international student from <a href="https://www.google.com/search?q=myanmar" target="_blank">Myanmar</a>, residing in {resumeData.location}.
                            I am an currently a {resumeData.schoolYear} undergrad {resumeData.major} student at {resumeData.college}. I am a self-taught {resumeData.dream} and interested in building iOS application and web development. */}
                            <div className="about-me-container row">
                                <div className="about-me-column column">
                                    <p>College - {resumeData.college}</p>
                                    <p>Major - {resumeData.major}</p>
                                    <p>Location - {resumeData.location}</p>
                                </div>
                                <div className="about-me-column column">
                                    <p>Academic Year - {resumeData.schoolYear}</p>
                                    <p>Favorite Sport - {resumeData.favSport}</p>
                                    <p>Fun Fact - {resumeData.dream}</p>
                                </div>
                            </div>

                            <br />
                            Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.
                        </h3>
                        <hr />
                        <ul className="social">
                            <li><a href="https://twitter.com/myatthu_ko" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/in/myat-thu-ko-089938178/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://github.com/MyatThuKo" target="_blank"><i className="fa fa-github" /></a></li>
                        </ul>
                    </div>

                    <div className="coup-flag">
                        <div>
                            <h2 className="coup-day">
                                <CountUp
                                    start={0}
                                    end={this.state.currentDate}
                                    duration={5}
                                />  Days since the Military Coup in Myanmar... (Feb 1st, 2021)</h2>
                        </div>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header >
        )
    }
}
