import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import GoogleButton from "../../../Components/GoogleButton";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUpUser, updateUser } = useAuth();

  const handleSignUpUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const userDetails = {
      username: name,
      email: email,
      role: "user",
    };
    signUpUser(email, password)
      .then((userCredential) => {
        updateUser(userCredential.user, name)
          .then(() => {
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
              body: JSON.stringify(userDetails),
            })
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.log(error);
              });
            toast.success("User Created Successfully");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("auth/email-already-in-use"))
          toast.error("User Exist");
      });
  };
  return (
    <section className="container">
      <div className="hero min-h-screen">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSignUpUser}>
              <h2 className="text-xl font-bold text-center">SIGN UP</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="full name"
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    Already have an account?
                    <Link to="/auth/signin" className="link link-hover">
                      Sign In
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <GoogleButton />
          </div>

          <Toaster position="top-right" />
        </div>
      </div>
    </section>
  );
}
