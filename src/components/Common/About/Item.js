const Item = ({
    name
}) => {
    return (
        <div class="ab-item">
            <p>{name}</p>
            <div id="bar3" class="barfiller">
                <span class="fill" data-percentage="75"></span>
                <div class="tipWrap">
                    <span class="tip"></span>
                </div>
            </div>
        </div>
    );
}

export default Item;