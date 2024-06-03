import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "../../../Components/GoogleButton";

export default function SignIn() {
  return (
    <section className="container">
      <div className="hero min-h-screen">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <h2 className="text-xl font-bold text-center">SIGN IN</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt">
                    Already have an account?
                    <Link to="/auth/signup" className="link link-hover">
                      Sign Up
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <GoogleButton />
          </div>
        </div>
      </div>
    </section>
  );
}
