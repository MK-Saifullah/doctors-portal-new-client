import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyAppointments = () => {
    const {user} = useContext(AuthContext)
    // const [booking, setBooking]  = useState({})
    const url = `http://localhost:5000/appointmentsData?email=${user?.email}`

    const {data: appointmentsData = [], isError, isLoading, error} = useQuery({
        queryKey: ['appointmentsData', user?.email],
        queryFn: async () => {
            const res = await fetch (url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }

    // useEffect(() => {
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setBooking(data)
    //     })
    // }, [user?.email])
  return (
    <div>
      <h2 className="text-2xl mb-5 font-bold">My Appointments</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
        {
            appointmentsData?.map((booking, i) => 
                <tr className="hover" key={booking._id}>
                <th>{i+1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            )
        }
            {/* row 2 */}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
