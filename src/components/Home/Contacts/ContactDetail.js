const ContactDetail = ({
    icon,
    text
}) => {
    return (
        <div className="col-md-4">
            <div className="gt-text email">
                <i className={icon}></i>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default ContactDetail;