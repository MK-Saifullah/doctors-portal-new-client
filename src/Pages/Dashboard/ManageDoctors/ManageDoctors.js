import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const closeModal = () => {
        setDeletingDoctor(null)
    }
 
  const { data: doctors = [], isLoading } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:5000/doctors`, {
          headers: {
            authorization: `bearer $(localStorage.getItem('accessToken'))`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleDeleteDoctor = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/doctors/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.error("Successfully deleted?");
        });
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">
        We have {doctors?.length} doctors now
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src={doctor.image} alt="doctor pho" />
                    </div>
                  </div>
                </td>

                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td onClick={() => setDeletingDoctor(doctor)}>
                  <label htmlFor="confirmation-modal" className="btn btn-xs btn-error">
                    Delete
                  </label>
                  {/* <button type="" className="btn btn-xs btn-error">
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
            message={`Are you sure you want to delete?`}
            confirmation={`If you delete Dr. ${deletingDoctor.name}. It cannot be undone.`}
            successAction = {() => handleDeleteDoctor(deletingDoctor._id)}
            closeModal = {closeModal}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
