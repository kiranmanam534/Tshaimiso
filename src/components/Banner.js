import React from "react";

 const Banner = () => {
  return (
    //  main-slider
    <section className="w3l-main-slider" id="home">
      <div
        className="banner-content"
        style={{display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",         
              background: "#057a52"}}
      >
      <img
      src="assets/images/logo.a9857162.svg"
      style={{marginTop: -40, height: 120}}
    />
      <div className="text-cenetr">
      <h3 style=
       {{textAlign: "center",
        color: "#fff",
        letterSpacingpacing: 3}}
      >Intranet</h3>
      </div>
      
        <p
          style=
           {{ color: "#fff",
            paddingTop: 24,
            paddingRight: 10,
            letterSpacing: 3}}
          
        >
          Compensation for silicosis and TB
        </p>
      </div>
    </section>
  );
};

export default Banner;
