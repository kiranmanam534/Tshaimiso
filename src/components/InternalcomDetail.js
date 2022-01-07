import React from "react";
import moment from "moment";

const InternalcomDetail = (props) => {
  const classRow = props.index % 2 == 0 ? "row row-1" : "row row-2";
  
  return (
    <div className={classRow}>
      <section>
        <i className="icon fas fa-home"></i>
        <div className="details">
          <span className="title">{props.item.subject}</span>
          <span>{moment(props.item.createdDate).format("YYYY-MM-DD")}</span>
        </div>
        <p>
          
          {props.item.description.length > 30
            ? props.item.description.substr(0, 150) + "..."
            : props.item.description}
        </p>
        <div className="bottom">
          <a
            href="#"
          >
            Read more
          </a>
          <i>- Someone famous</i>
        </div>
      </section>
    </div>
  );
};

export default InternalcomDetail;
