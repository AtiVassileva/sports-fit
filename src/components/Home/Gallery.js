import Photo from "./Photo";

const Gallery = () => {
    return(
        <div className="gallery-section">
                <div className="gallery">
                    <div className="grid-sizer"></div>
                    <Photo isWide={true} imageUrl={'img/gallery/gallery-1.jpg'}/>
                    <div className="gs-item set-bg" style={{ backgroundImage: "url('img/gallery/gallery-2.jpg')" }}>
                        <a href="img/gallery/gallery-2.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: "url('img/gallery/gallery-3.jpg')" }}>
                        <a href="img/gallery/gallery-3.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: "url('img/gallery/gallery-4.jpg')" }}>
                        <a href="img/gallery/gallery-4.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a>
                    </div>
                    <div className="gs-item set-bg" style={{ backgroundImage: "url('img/gallery/gallery-5.jpg')" }}>
                        <a href="img/gallery/gallery-5.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a>
                    </div>
                    <div className="gs-item grid-wide set-bg" style={{ backgroundImage: "url('img/gallery/gallery-6.jpg')" }}>
                        <a href="img/gallery/gallery-6.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o"></i></a>
                    </div>
                </div>
            </div>
    );
}

export default Gallery;