const Benefit = ({
    title,
    spanClass,
    text
}) => {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="cs-item">
                <span className={spanClass}></span>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Benefit;