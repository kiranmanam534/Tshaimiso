import React from "react";

const Modal = ({ handleClose, show, children,title }) => {
  console.log(children);
  return (
    <div
      className="modal"
      style={{ display: show ? "block" : "none" }}
      id="myModal"
      role="dialog"
    >
      <div className="modal-dialog">
        {/* <!-- Modal content--> */}
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
            <h4 className="modal-title">{title}</h4>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
