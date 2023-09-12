import React from "react";
import { Row, Col, Typography } from "antd";
import { Link } from "react-router-dom";

import LoginForm from "../../../components/AuthComponents/LoginForm";

const { Title } = Typography;

const LoginPage = () => {
  return (
      <Row justify="center" align="middle" >
        <Col style={{ textAlign: "center" }}>
          <Title >
          
          </Title>
          <br />
        </Col>
        <Col>
          <LoginForm />
       
        </Col>
      </Row>
    
  );
};

export default LoginPage;

