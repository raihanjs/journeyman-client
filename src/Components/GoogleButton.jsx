import React from "react";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GoogleButton() {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const userDetails = {
          username: res.user.displayName,
          email: res.user.email,
          role: "user",
        };
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
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-red-500 py-4 w-full rounded-md flex items-center justify-center space-x-2 text-white"
    >
      <span>Sign In With Google</span>
      <FaGoogle />
    </button>
  );
}
