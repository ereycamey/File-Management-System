import React from "react";
import backgroundImage from "../Register/baground.jpg"; // Replace with the actual path

import RegisterForm from "../../../components/AuthComponents/RegisterForm";

const Register = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Use 100% viewport height for mobile responsiveness
        width: "100%", // Set the width to 100% for mobile responsiveness
        margin: "0",
      }}
    >
     
      <div >
        <div>
          <RegisterForm />
         
        </div>
      </div>
    </div>
  );
};

export default Register;