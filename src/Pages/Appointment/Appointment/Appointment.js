import React, { useState } from "react";
import AvailableAppointments from "../BookAppointment/AvailableAppointments";
import AppointmentBanner from "./AppointmentBanner";

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppointmentBanner 
        selected={selected} setSelected={setSelected}
        ></AppointmentBanner>
        
      <AvailableAppointments
        selected={selected} setSelected={setSelected} 
      ></AvailableAppointments>
    
    </div>
  );
};

export default Appointment;
