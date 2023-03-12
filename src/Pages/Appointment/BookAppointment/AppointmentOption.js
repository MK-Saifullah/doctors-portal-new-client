import React from "react";

const AppointmentOption = ({ booking, setTreatment }) => {
  const { slots, name } = booking;

  return (
    <div className="card shadow-xl mt-5">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
            disabled = {slots.length === 0}
            onClick={() => setTreatment(booking)}
            htmlFor="booking-modal"
            className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
