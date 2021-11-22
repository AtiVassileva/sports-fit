import Photo from "./Photo";

const Gallery = () => {
    return(
        <div className="gallery-section">
                <div className="gallery">
                    <div className="grid-sizer"></div>
                    <Photo
                        isWide={true}
                        imageUrl={'img/gallery/gallery-1.jpg'}
                    />
                    <Photo
                        isWide={false}
                        imageUrl={'img/gallery/gallery-2.jpg'}
                    />
                    <Photo
                        isWide={false}
                        imageUrl={'img/gallery/gallery-3.jpg'}
                    />
                    <Photo
                        isWide={false}
                        imageUrl={'img/gallery/gallery-4.jpg'}
                    />
                    <Photo
                        isWide={false}
                        imageUrl={'img/gallery/gallery-5.jpg'}
                    />
                    <Photo
                        isWide={true}
                        imageUrl={'img/gallery/gallery-6.jpg'}
                    />                   
                </div>
            </div>
    );
}

export default Gallery;