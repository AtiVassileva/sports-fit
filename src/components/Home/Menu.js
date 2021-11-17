const Menu = () => {
    return (
        <div className="menu trans_800">
        <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">classNamees & Services</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span>652-345 3222 11</span>
        </div>
      </div>
    );
}

export default Menu;