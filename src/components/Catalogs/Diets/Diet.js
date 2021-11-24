const Diet = ({
    imageClasses,
    textClasses,
    imageUrl,
    heading,
    description,
}) => (
    <div>
        <div class={imageClasses}>
            <div class="ss-pic">
                <img src={imageUrl} alt="" />
            </div>
        </div>
        <div class={textClasses}>
            <div class="ss-text">
                <h4>{heading}</h4>
                <p>{description}</p>
                <a href="">Explore</a>
            </div>
        </div>
    </div>
)

export default Diet;