const HamburgerBar = () => {
    return (
        <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
        <div className="hamburger">
          <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
            <span>menu</span>
            <div className="hamburger_container">
              <div className="menu_hamburger">
                <div className="line_1 hamburger_lines" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
                <div className="line_2 hamburger_lines" style={{ visibility: "inherit", opacity: 1 }}></div>
                <div className="line_3 hamburger_lines" style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HamburgerBar;