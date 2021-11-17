const Box = () => {
    return (
        <div className="box">
                  <div className="box_icon d-flex flex-column align-items-center justify-content-center"><img src="images/icon_3.png" alt="" /></div>
                  <div className="box_title">Блог</div>
                  <div className="box_text">
                    <p>Полезни статии за здравословен живот</p>
                  </div>
                  <div className="box_link_container">
                    <a href="#"><div className="box_link d-flex flex-column align-items-center justify-content-center trans_200"><div>+</div></div></a>
                  </div>
                </div>
    );
}

export default Box;