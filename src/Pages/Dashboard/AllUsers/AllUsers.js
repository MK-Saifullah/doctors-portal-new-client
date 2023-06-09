import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async() => {
      const res = await fetch('http://localhost:5000/users');
      const data = await res.json();
      return data;
    }
  });

  const handleMakeAdmin = id => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
        method: 'PUT', 
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            toast.success('Make admin successful.')
            refetch();
        }
    })
}

//   const handleMakeAdmin = (id) => {
//     console.log(id)
//     fetch(`http://localhost:5000/users/admin/${id}`,{
//         method: 'PATCH',
//     }).then(res => res.json()).then(data => console.log(data))
//     // fetch(`http://localhost:5000/users/admin/${id}`, {
//     //     method: "PUT",
//     //     // headers: {
//     //     //     authorization: `bearer ${localStorage.getItem('accessToken')}`
//     //     // }
//     // })
//     // .then(res => res.json())
//     // .then(data => {
//     //     // if(data.modifiedCount > 0){
//     //     //     toast.success('Make admin successfully')
//     //     //     refetch()
//     //     // }
//     //     console.log(data)
//     // })
//   }
  return (
    <div>
      <h2 className="text-3xl font-bold">All users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => 
              <tr key= {user._id}>
                <th>{i+1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user?._id)} type="" className="btn btn-xs btn-primary">Make Admin</button>}</td>
                {/* <td><button onClick={()=>handleMakeAdmin(user?._id)} type="" className="btn btn-xs btn-primary">Make Admin</button></td> */}
                <td><button type="" className="btn btn-xs btn-error">Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
