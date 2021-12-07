const Item = ({
    name
}) => {
    return (
        <div className="ab-item">
            <p>{name}</p>
            <div id="bar3" className="barfiller">
                <span className="fill" data-percentage="75"></span>
                <div className="tipWrap">
                    <span className="tip"></span>
                </div>
            </div>
        </div>
    );
}

export default Item;