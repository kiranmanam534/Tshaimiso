import React,{useState} from "react";

const Media = () => {
    const [url, setUrl] = useState("");
  const openSocialMediaSites = (url,icon) => {
    setUrl(url);
    window.open(url, "_blank");
    // setIsModal(true);
  };
  return (
    <div>
      <section className="w3l-content-with-photo-4">
        <div className="content-photo-info py-5 bg-color">
          <div className="container">
            <div className="title-content text-left">
              {/* <h3  className="hny-title" style={{color: "#057a52", fontWeight: 400 , textAlign: "center" }}>Media</h3>                     */}
              <div style={{ textAlign: "center" }}>
              <i
                  class="fab fa-4x fa-youtube-square"
                  onClick={() => {
                    openSocialMediaSites(
                      "https://www.facebook.com/silicosissettlement/",'fa-youtube-square'
                    );
                  }}
                  style={{
                    color: "rgb(5, 122, 82)",
                    paddingRight: 20,
                    cursor: "pointer",
                  }}
                ></i>
                <i
                  class="fab fa-4x fa-facebook"
                  onClick={() => {
                    openSocialMediaSites(
                      "https://www.facebook.com/silicosissettlement/"
                    );
                  }}
                  style={{
                    color: "rgb(5, 122, 82)",
                    paddingRight: 20,
                    cursor: "pointer",
                  }}
                ></i>
                <i
                  class="fab fa-4x fa-linkedin"
                  onClick={() => {
                    openSocialMediaSites(
                      "https://www.linkedin.com/company/tshiamiso-trust/?viewAsMember=true"
                    );
                  }}
                  style={{
                    color: "rgb(5, 122, 82)",
                    paddingRight: 20,
                    cursor: "pointer",
                  }}
                ></i>
               
              </div>
            </div>
            <br />
            <div className="services-block_grids_bottom">
              <div className="row">
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/wUJ9_6KZuz4"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>Tshiamiso Trust–2021 CEO’s progress report</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/nRhbSUdEezc"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>Who is Tshiamiso Trust</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/4612FHHSyUU"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>How to Submit A Claim</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/40E_ws-T_XQ"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>Documents needed for the claim</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/2G8GSkwKmVs"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>How to Book An Appointment </h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/cnUXdsbdOSE"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>Who is Eligible or not Eligible</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 service_grid_btm_left">
                  <a href="#">
                    <iframe
                      width="100%"
                      height="345"
                      src="https://www.youtube.com/embed/GoHvPXoNsuA"
                    ></iframe>
                  </a>
                  <div className="service_grid_btm_left1">
                    <div className="service_grid_btm_left2">
                      <h5>Review & Approval Process</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
