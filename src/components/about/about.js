import React from 'react'

export const about = () => {
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/profilepic.png" alt="profile" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>Myat Thu Ko</span><br />
                                <span>78 Bay 13th Street<br />
                                    Brooklyn, NY 11214 US
                                </span><br />
                                <span>(347)707-3462</span><br />
                                <span> <a href="mailto:nymyatthuko@gmail.com"> nymyatthuko@gmail.com </a></span> <br />
                                <span><a href="https://myatthuko.com/" target="_blank"> myatthuko.com </a></span>
                            </p>
                        </div>
                        <div className="columns download">
                            <h2>Hobbies</h2>
                            <p className="hobbies">
                                <span> Playing basketball 🏀 </span> <br />
                                <span> Playing football ⚽️ </span> <br />
                                <span> Learning new programming languages 💻 </span> <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about; 
