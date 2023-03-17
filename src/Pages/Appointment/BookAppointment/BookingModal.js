import { format } from "date-fns/esm";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
  const { name: treatmentName, slots } = treatment;
  const {user} = useContext(AuthContext);
  const date = format(selected, "PP");

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        appointmentDate: date,
        treatment: treatmentName,
        patient: name,
        slot,
        email,
        phone, 
      }
      fetch('http://localhost:5000/appointmentsData', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(booking)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.acknowledged) {
          setTreatment(null)
          toast.success('Booking Confirmed')
          refetch();
        }
        else {
          toast.error(data.message)
        }
      })
      // if(data.acknowledged) {
      //   setTreatment(null);

    
    // console.log(booking)
    
  }
  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBooking} className="mt-5 grid grid-cols-1 gap-3">
          <h3 className="text-lg font-bold text-center">{treatmentName}</h3>
            <input name="date"
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {
                slots?.map((slot, index) => <option value={slot} key={index}>{slot}</option>)
              }
              
            </select>
            <input name="name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input name="email"
              type="email"
              defaultValue={user?.email} disabled
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <input name="phone"
              type="number"
              placeholder="Your Phone"
              className="input input-bordered w-full"
            />
            <input type="submit" className="btn btn-accent w-full" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
