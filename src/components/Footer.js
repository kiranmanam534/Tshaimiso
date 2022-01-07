import React from "react";

export default function Footer() {
  window.onscroll = function () {
    scrollFunction();
     document.querySelector(".right-bar").classList.remove("active");
  };
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  };
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <footer className="w3l-footer-66">
      <div className="footer-66-info">
        <div className="container">
          <section
            className="w3l-main-slider"
            id="home"
            style={{ marginTop: 40 }}
          >
            <div
              className="banner-content"
              style={{
                height: 80,
                width: "100%",
                background: "#057a52",
                marginTop: -16,
                paddingLeft: 100,
              }}
            >
              <img
                src="assets/images/logo.a9857162.svg"
                style={{ marginTop: -40, height: 120, marginLeft: -115 }}
              />
            </div>
          </section>
        </div>
      </div>
      {/* move top  */}
      <button onClick={topFunction} id="movetop" title="Go to top">
        <span className="fa fa-level-up-alt"></span>
      </button>
    </footer>
  );
}
