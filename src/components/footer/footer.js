import React from 'react'

export const footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        <li><a href="https://twitter.com/myatthu_ko" target="_blank"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://www.linkedin.com/in/myatthuko13/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                        <li><a href="https://github.com/MyatThuKo" target="_blank"><i className="fa fa-github" /></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>© Copyright 2021 Myat Thu Ko</li>
                        <li>Design Credit to <a title="Styleshout" target="_blank" href="https://www.styleshout.com/free-templates/ceevee/">Styleshout</a></li>
                    </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
        </footer>
    )
}

export default footer;