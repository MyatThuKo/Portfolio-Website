import React from 'react'

export const contactus = () => {
    return (
        <div>
            <section id="contact">
                <h1><span>Get In Touch</span></h1>
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h2><span>Get In Touch.</span></h2>
                    </div>
                    <div className="ten columns">
                        <p className="lead">
                            If you are looking for a candidate for the following position, please fill out the form below to contact me.
                            <ul style={{ listStyle: 'none' }}>
                                <li> iOS developer intern </li>
                                <li> software developer intern </li>
                                <li> iOS developer entry level </li>
                                <li> software developer entry level </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="eight columns">
                        <form action method="post" id="contactForm" name="contactForm">
                            <fieldset>
                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactName" name="contactName" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" size={35} id="contactEmail" name="contactEmail" placeholder="Your Email" />
                                </div>
                                <div>
                                    <label htmlFor="contactSubject">Subject<span className="required">*</span></label>
                                    <input type="text" size={35} id="contactSubject" name="contactSubject" placeholder="Subject" />
                                </div>
                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
                                </div>
                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                                        <img alt="" src="images/loader.gif" />
                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div id="message-warning">This contact form is still under construction. Sorry for the inconvenience.</div>
                        <div id="message-success">
                            <i className="fa fa-check" />Thank you for contacting.<br />
                        </div>
                    </div>
                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">
                            <h3><span>My Contact Info</span></h3>
                            <p className="address">
                                <span>Myat Thu Ko</span><br />
                                <span>New York, NY</span><br />
                                <span>(347)707-3462</span><br />
                                <span> <a href="mailto:nymyatthuko@gmail.com"> nymyatthuko@gmail.com </a></span> <br />
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        </div>
    )
}

export default contactus; 
