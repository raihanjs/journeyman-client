import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    // fetch(`http://localhost:5000/users?email=${user?.email}`)
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data.find((item) => item.email === user?.email));
      });
  }, [user]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const updateUser = {
      username: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
    };
    fetch(`http://localhost:5000/users/${userDetails?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(updateUser),
    });
  };
  return (
    <section className="my-5">
      <div className="container">
        <h2 className="text-xl font-semibold text-center">
          Welcome {userDetails?.username}
        </h2>

        <form onSubmit={handleUpdateProfile} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={userDetails?.username}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={userDetails?.email}
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              defaultValue={userDetails?.address}
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </form>
      </div>
    </section>
  );
}
