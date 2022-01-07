import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import DatePicker from "react-date-picker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Modal from "../../components/Modal";
import axios from "axios";

const localizer = momentLocalizer(moment);


const Evnents = () => {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    title: "",
    allDay: false,
    start: "",
    end: "",
  });
  const [isModal, setIsModal] = useState(false);
  const eventsArry=[];
  const ShowEvent = (data) => {
    setEvent(data);
    setIsModal(true);
  };
  const viewevent = () => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Subject</td>
              <td>
                {" "}
                : <b>{event.title}</b>
              </td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td> : {moment(event.start).format("MMMM d, YYYY")}</td>
            </tr>
            <tr>
              <td>End Date</td>
              <td> : {moment(event.end).format("MMMM d, YYYY")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get("http://102.130.114.194:8787/api/Events")
      .then((response) => {
        console.log(response.data);
        response.data.forEach(element => {
          console.log(element);
          eventsArry.push({
            title: element.eventName,
            start: moment(element.satrtDate).toDate(),
            end: moment(element.endDate).toDate(),
          })
         
        });
        setEvents(eventsArry) 
      })
      .catch((errror) => {
        console.log(errror);
      });
  }, []);
  return (
    <div>
      <Calendar
        localizer={localizer}
        defaultDate={moment().toDate()}
        defaultView="month"
        events={events}
        onSelectEvent={ShowEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh",background:'#a8ce38c7',padding:50 }}
      />

      <Modal
        show={isModal}
        title="Event"
        handleClose={() => {
          setIsModal(!isModal);
        }}
      >
        {viewevent()}
      </Modal>
    </div>
  );
};

export default Evnents;
