import React, { useEffect, useState } from "react";
import axios from "axios";
import "./InternalComs.css";
import InternalcomDetail from "../../components/InternalcomDetail";

const InternalComs = () => {
  const [internalComs, setInternalComs] = useState([]);
  const [desc, setdesc] = useState('');
  useEffect(() => {
    axios
      .get("http://102.130.114.194:8787/api/InternalComs")
      .then((response) => {
        console.log(response.data);
        setInternalComs(response.data);
      })
      .catch((errror) => {
        console.log(errror);
      });
  }, []);


  const viewInternalComs = internalComs.map((item,index) => (
    <InternalcomDetail key={item.id} item={item}  index={index} />
  ));

  return (
    <section className="w3l-content-with-photo-4">
      <div className="content-photo-info py-5 bg-color">
        <div className="wrapper">
          <div className="center-line">
            <a href="#" className="scroll-icon">
              <i className="fas fa-caret-up"></i>
            </a>
          </div>
          {viewInternalComs}
        </div>
      </div>
    </section>
  );
};

export default InternalComs;
