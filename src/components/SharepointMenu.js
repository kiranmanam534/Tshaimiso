import React from "react";

const SharepointMenu = () => {
 
  const openNewTab = (url) => {
    window.open(url, "--blank");
  };
  return (
    <div>
      <div className="right-bar">
        <div className="right-bar-container">
          <div className="sidebar-menu">
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/IT_Systems_and_Data"
                  );
                }}
              >
                IT
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/PMO"
                  );
                }}
              >
                PMO
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/BenefitsCommittee"
                  );
                }}
              >
                Benefits Committee
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/Operations"
                  );
                }}
              >
                Operations
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/BoardofTrustees"
                  );
                }}
              >
                Board of Trustees
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/BoardSecretary"
                  );
                }}
              >
                Board Secretary
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/EmployeeInfoHub"
                  );
                }}
              >
                Employe info hub
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/Finance"
                  );
                }}
              >
                Finance
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a href="Governance" className="list-item">
                Governance
              </a>
            </div>
            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/HRandAdmin"
                  );
                }}
              >
                HR
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/ICT"
                  );
                }}
              >
                ICT
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/LegalCompliance"
                  );
                }}
              >
                Legal & Compliance
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/Risk"
                  );
                }}
              >
                Risk
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/Medical"
                  );
                }}
              >
                Medical
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() => {
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/PoliciesandProcedures"
                  );
                }}
              >
                Policies & Procedures
              </a>
            </div>

            <div className="sidebar-menu-item">
              <a
                href="#"
                className="list-item"
                onClick={() =>
                  openNewTab(
                    "https://tshiamisotrustcloud.sharepoint.com/sites/StakeholderandComms"
                  )
                }
              >
                Stakeholder and comms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharepointMenu;
