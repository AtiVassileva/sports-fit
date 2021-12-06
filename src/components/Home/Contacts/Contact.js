import ContactDetail from "./ContactDetail";

const Contact = () => {
    return (
        <div className="gettouch-section">
            <div className="container">
                <div className="row">
                    <ContactDetail
                        icon="fa fa-map-marker"
                        text="333 Middle Winchendon Rd, Rindge"
                    />
                    <ContactDetail
                        icon="fa fa-mobile"
                        text="125-711-811"
                    />
                    <ContactDetail
                        icon="fa fa-envelope"
                        text="Support.gymcenter@gmail.com"
                    />
                </div>
            </div>
        </div>
    );
}

export default Contact;