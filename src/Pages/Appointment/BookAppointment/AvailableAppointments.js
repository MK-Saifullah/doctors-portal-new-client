import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentOption from "./AppointmentOption";
// import AppointmentOption from "./AppointmentOption";
// import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";

const AvailableAppointments = ({ selected }) => {
  const [treatment, setTreatment] = useState(null);
  // const [treatment, setTreatment] = useState({});
  
  // const [bookData, setBookData] = useState([]);


  const {data : bookData = []} = useQuery({
    queryKey: ['bookingData'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/bookingData')
      const data = await res.json();
      return data
    }
  })

  // useEffect(() => {
  //   fetch("http://localhost:5000/bookingData")
  //     .then((res) => res.json())
  //     .then((data) => setBookData(data));
  // }, []);

  return (
    <section>
      <div>
        <h2 className="text-center text-2xl font-bold text-primary mt-14">
          You picked {format(selected, "PP")}.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookData.map((booking) => (
          <AppointmentOption
            key={booking._id}
            booking={booking}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}

      </div>
           {
            treatment && 
            <BookingModal 
            treatment = {treatment}
            selected = {selected}
            setTreatment = {setTreatment}></BookingModal>
           }
        {/* <BookingModal 
          treatment = {treatment}
          selected = {selected}
          setTreatment = {setTreatment}
          ></BookingModal> */}
    </section>
  );
};

export default AvailableAppointments;
