import React, { Component } from 'react';
import flame from "../header/flame.gif";

export default class Header extends Component {
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
                        {/* <img className="header-logo" src="images/flame.png" /> */}
                        <iframe src={flame} className="giphy-embed" > </iframe>
                        <h1 className="responsive-headline">Hello, I'm {resumeData.name}.</h1>
                        <h3>I am a {resumeData.role} who is aiming to become a {resumeData.dream}, based in {resumeData.location} <br />
                            Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">
                            <li><a href="https://twitter.com/myatthu_ko" target="_blank"><i className="fa fa-twitter" /></a></li>
                            <li><a href="https://www.linkedin.com/in/myat-thu-ko-089938178/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://github.com/MyatThuKo" target="_blank"><i className="fa fa-github" /></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
                </p>
            </header>
        )
    }
}

{/* <iframe src="https://giphy.com/embed/hpWpySH0J2QoIwIWlx" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */ }
