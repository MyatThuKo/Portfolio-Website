import React from 'react'

export default class contactus extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }
    render() {
        const { status } = this.state;
        return (
            <div>
                <section id="contact">
                    <div>
                        <img src="https://img.icons8.com/clouds/128/000000/apple-mail.png" />
                        <h1> <span>Get In Touch </span></h1>
                    </div>
                    <div className="row section-head">
                        <div className="twelve columns">
                            <p className="lead">
                                If you are looking for a candidate for the following position, please fill out the form below to contact me.
                            <ul style={{ listStyle: 'none' }}>
                                    <li> iOS developer intern </li>
                                    <li> Software developer intern </li>
                                    <li> iOS developer entry level </li>
                                    <li> Software developer entry level </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns">
                            <form action="https://formspree.io/f/mrgodlzr" method="post" id="contactForm" name="contactForm" onSubmit={this.submitForm}>
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
                                    <div className="after-submit">
                                        {status === "SUCCESS" ? <p>Thank you for reaching out to me! <br />
                                        I will react out to you as soon as possible. <br />
                                        Hang tight!
                                        </p> : <button className="submit">Submit</button>}
                                        {status === "ERROR" && <p>Ooops! There was an error.</p>}
                                    </div>
                                </fieldset>
                            </form>
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
            </div >
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}
