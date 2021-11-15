const Gallery = () => {
    return (
    <div className="gallery">
        <div className="gallery_slider_container">
            <div className="owl-carousel owl-theme gallery_slider">
                <div className="owl-item"><img src="images/gallery_3.jpg" alt="" /></div>
                <div className="owl-item"><img src="images/gallery_4.jpg" alt="" /></div>
                <div className="owl-item"><img src="images/gallery_5.jpg" alt="" /></div>
                <div className="owl-item"><img src="images/gallery_1.jpg" alt="" /></div>
                <div className="owl-item"><img src="images/gallery_2.jpg" alt="" /></div>

            </div>
        </div>
    </div>
    );
}

export default Gallery;