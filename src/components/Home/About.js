const About = () => {
    return (
        <div className="about">
        <div className="container about_container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_content">
                <div className="section_title_container">
                  <div className="section_subtitle">Добре дошли в sportfit</div>
                  <div className="section_title">За <span>нас</span></div>
                </div>
                <div className="text_highlight">Утвърден лидер на пазара.</div>
                <div className="about_text">
                  <p>Дъ бест orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.



</p>
                </div>
                <div className="button about_button"><a href="#">Нашите програми</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_background">
          <div className="container fill_height">
            <div className="row fill_height">
              <div className="col-lg-6 offset-lg-6 fill_height">
                <div className="about_image"><img src="images/a1.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;