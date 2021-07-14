import "./contact.css"

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-information">
                <div className="name-container">
                    Marc Carlson
                </div>
                <div className="phone-number-container">
                    <div className="phone-number-title">
                        Phone Number
                    </div>
                    <div className="phone-number">
                        (708)-635-4501
                    </div>
                </div>
                <div className="email-container">
                    <div className="email-title-container">
                        Email
                    </div>
                    <div className="email">
                        marc.carlson30@gmail.com
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;