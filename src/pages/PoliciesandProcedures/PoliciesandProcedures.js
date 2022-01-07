import React, { useEffect, useState } from "react";
import { PoliciesandProceduresList } from "../../dummyData/dummyData";

import "../../pages/PoliciesandProcedures/PoliciesandProcedures.css";

const PoliciesandProcedures = () => {
  useEffect(() => {
    ShowPolicyDocuments(
      "assets/images/TshiamisoTrust-HarassmentPolicy.pdf",
      "Harrasment Policy"
    );
  }, []);
  const ShowPolicyDocuments = (imageUrl, headding) => {
    document.getElementById("policyHeaderText").innerText = headding;
    document.getElementById("PolicyDocuments").src = imageUrl;
  };

  const [selectedList, setSelectedList] = useState("");
  const toggleChoice = (name, event) => {
    let selected = selectedList;
    selected = {};
    let selectedCircles = selected[name] == "selected" ? "" : "selected";
    selected[name] = selectedCircles;
    setSelectedList(selected);
  };
  const PoliciesandProceduresView = (item, index) => {
    return (
      <li
        key={item.id}
        className={"PolicyNamesLi " + selectedList[item.id]}
        id="PolicyNames1"
        onClick={() => {
          ShowPolicyDocuments(item.url, item.name);
          toggleChoice(item.id);
        }}
      >
        <div style={{ float: "left" }}>
          <img
            src={item.icon}
            alt=" "
            className="img-fluid mr-2"
            style={{ width: 30, height: 30 }}
          />
          {item.name}
          <i className="fa fa-chervon-left"></i>
        </div>
      </li>
    );
  };
  return (
    <div>
      <section className="w3l-content-with-photo-4" style={{ marginTop: -36 }}>
        <div className="content-photo-info py-5 bg-color">
          <div className="container-fluid">
            <div className="title-content text-left">
              <h3 className="hny-title policy">Policies and Procedures</h3>
              <br />
            </div>
            <div
              className="services-block_grids_bottom"
              style={{ border: "none" }}
            >
              <div className="row row-border-none">
                <div className="col-lg-4 div-ul-policy">
                  <ul className="ul-PolicyNames">
                    {PoliciesandProceduresList.map((item, index) => (
                     PoliciesandProceduresView(item, index)
                    ))}
                  </ul>
                </div>
                <div className="col-lg-8 div-ul-policy">
                  <div style={{ textAlign: "center" }}>
                    <b id="policyHeaderText" className="policyHeaderText"></b>
                  </div>
                  <div
                    className="col-lg-12 col-md-12 service_grid_btm_left"
                    style={{ marginBottom: 20 }}
                  >
                    <iframe
                      id="PolicyDocuments"
                      className="PolicyDocuments"
                    ></iframe>
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

export default PoliciesandProcedures;
