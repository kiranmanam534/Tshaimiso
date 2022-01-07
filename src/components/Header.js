import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [url, setUrl] = useState("");
  const openSharepointLinks = () => {
    document.querySelector(".right-bar").classList.toggle("active");
  };
  const closeSharepointLinks = () => {
    document.querySelector(".right-bar").classList.remove("active");
  };
  const openSocialMediaSites = (url) => {
    setUrl(url);
    window.open(url,'_blank')
   // setIsModal(true);
  };

  return (
    <>
      <header className="w3l-header-nav">
        <nav
          className="navbar navbar-expand-lg navbar-light px-lg-0 py-0 px-3 stroke"
          style={{ margin: 0, padding: 0, justifyContent: "flex-end" }}
        >
          <div>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa icon-expand fa-bars"></span>
              <span className="fa icon-close fa-times"></span>
            </button>

            <div
              className="collapse navbar-collapse float-right"
              id="navbarSupportedContent"
              // style={{marginLeft: 360}}
            >
              <ul className="navbar-nav mx-lg-auto">
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"trustees"}
                  >
                    Trustees
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"staff"}
                  >
                    Staff
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"organogram"}
                  >
                    Organogram
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"policiesandProcedures"}
                  >
                    Policies And Procedures
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"media"}
                  >
                    Media
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link nav-link-sharepoint"
                    to={"#"}
                    onClick={openSharepointLinks}
                  >
                    Sharepoint Sites
                  </Link>
                </li>
                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"internal-coms"}
                  >
                    Internal Coms
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    onClick={closeSharepointLinks}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={"events"}
                  >
                    Events
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      openSocialMediaSites(
                        "https://www.facebook.com/silicosissettlement/"
                      );
                    }}
                  >
                    <i
                      className="fab fa-facebook"
                      style={{ fontSize: 20 }}
                    ></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => {
                      openSocialMediaSites('https://www.linkedin.com/company/tshiamiso-trust/?viewAsMember=true');
                    }}
                  >
                    <i class="fab fa-linkedin" style={{ fontSize: 20 }}></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Modal
        show={isModal}
        title="Event"
        handleClose={() => {
          setIsModal(!isModal);
        }}
      >
       <iframe src={url} width="100%" height='500'></iframe>
      </Modal>
    </>
  );
};

export default Header;
