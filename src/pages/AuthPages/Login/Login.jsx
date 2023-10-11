import React from "react";
import { Row, Col } from "antd";
import backgroundImage from "../Login/baground.jpg"; // Replace with the actual path
import LoginForm from "../../../components/AuthComponents/LoginForm";


const LoginPage = () => {
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
      <Row justify="center" align="middle" style={{ width: "100%" }}>
        
        <Col xs={24} sm={12}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;
