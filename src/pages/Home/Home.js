import React from "react";

import './Home.css'

const Home = () => {
  
  
  return <div>
      
      <section className="features-4">
      <div className="features4-block py-5">
        <div className="container py-lg-5" style={{height:200}}>
          <div
            className="title-content text-left mb-lg-5 title-content1">
            <h3
              className="hny-title1 two">
              The Tshiamiso Trust was established in December 2019 to ensure
              that eligible former or current gold mineworkers with silicosis or
              work-related TB (or, in case of deceased mineworkers, their
              dependants) are compensated.
            </h3>
          
          </div>
        </div>
      </div>
    </section>
    <section
    className="w3l-content-with-photo-4"  style={{background:"#fff"}} >
   
    <div className="content-photo-info py-5">
      <div className="container">
       
        <div className="container1">
        <div className="wrapper11">
          <marquee style={{padding: 3}} behavior="alternate"><span className="marquee">ANNOUNCEMENTS</span></marquee>
          </div>
        
        </div>
      </div>
    </div>
  </section>

  <section className="w3l-specification-6">
      <div className="specification-6-mian">
        <div className="container">
          <div className="row story-6-grids text-left">
            <div className="col-lg-6 story-gd pl-lg-4" style={{marginTop: 0}}>
              <div className="title-content text-left mb-lg-5 ">
                <img
                  src="assets/images/12717-vision.png"
                  className="img-fluid"
                  alt="/"
                />
                <p
                  className="sub-title">
                  Tshiamiso is a Setswana word that means "to make good" or "to
                  correct", and our vision is to live up to our name. In our
                  work, we strive to have a meaningful and positive impact on
                  the lives of the beneficiaries of the Trust - eligible gold
                  mineworkers and, in the case of deceased gold mineworkers,
                  their dependants.
                </p>
              </div>
              <img
                src="assets/images/Tshiamiso-Trust-Patient.png"
                className="img-fluid"
                alt="/"
              />
            </div>
            <div
              className="col-lg-6 story-gd pl-lg-4"
              style={{marginTop: -70}}
            >
              <div className="title-content text-left ">
                <img
                  src="assets/images/OurPurpose.png"
                  className="img-fluid"
                  alt="/"
                />
                <p
                  className="sub-title">
                  Our purpose is to make the intentions and terms of the
                  historic silicosis and TB settlement agreement a reality for
                  the people it affects. We will work to ensure that eligible
                  claimants receive the compensation that is due to them, and
                  will seek to leave a positive legacy, in co-operation
                </p>
              </div>
              <div
                style={{marginLeft: 0,
                  paddingRight: 0,
                  marginTop: 30}}>
                <p
                  className="sub-title"
                  id="ptest">
                  Eligibility is based on a mineworker having worked for any of
                  the gold mines listed in the Trust Deed at any time between 12
                  March 1965 and 10 December 2019. The establishment of the
                  Trust is the culmination of an historic R5 billion settlement
                  between six South African mining companies – African Rainbow
                  Minerals, Anglo American South Africa, AngloGold Ashanti, Gold
                  Fields, Harmony and Sibanye-Stillwater (and some of their affi
                  liates) – representatives of the mineworkers, and lawyers –
                  Richard Spoor Inc, Abrahams Kiewitz Inc and the Legal
                  Resources Centre – who brought the class action on behalf of
                  those mineworkers. The settlement was approved by a full bench
                  of the South Gauteng High Court on 26 July 2019 and became
                  unconditional on 10 December 2019.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      className="w3l-content-with-photo-4"
      style={{marginTop: 0}}
    >
      <div className="content-photo-info py-5">
        <div className="container">
          <div
            className="title-content text-left mb-lg-5 mt-4 "
            style={{marginTop: -10}}
          >
            <img
              src="assets/images/OurCoreValues.png"
              className="img-fluid"
              style={{width: "27%"}}
              alt="/"
            />
          </div>
          <div
            className="story-6-grids row story-6-grids1">
            <div className="photo-6-inf-right col-lg-6 text-left pr-lg-5">
              <a href="#">
                <img
                  src="assets/images/CompassionNew.jpg"
                  className="img-fluid"
                  alt=""
                  width="70%"
                />
                <p
                  className="sub-title">
                  We will be caring and compassionate in all our dealings with
                  those who approach the Trust
                </p>
                <br />
                <img
                  src="assets/images/Dignity.jpg"
                  className="img-fluid"
                  alt=""
                  width="70%"
                />
                <p
                  className="sub-title">
                  We treat all who come to us with dignity and respect
                </p>
              </a>
            </div>
            <div className="photo-6-inf-left col-lg-6 pr-lg-4">
              <a href="#">
                <img
                  src="assets/images/IntegrityNew.jpg"
                  className="img-fluid"
                  alt=""
                  width="70%"
                />
                <p
                  className="sub-title">
                  We are honest and uncompromising in living our values, and
                  will be transparent in all that we do
                </p>
                <br />
                <img
                  src="assets/images/Competence.jpg"
                  className="img-fluid"
                  alt=""
                  width="70%"
                />
                <p
                  className="sub-title">
                  We carry out our role effectively and efficiently in
                  accordance with the settlement agreement and court order
                </p>
              </a>
            </div>
          </div>
          <br />
          <iframe
            src="assets/images/tshiamiso-trust-deed-2020.pdf"
            width="100%"
            height={500}
          ></iframe>
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
