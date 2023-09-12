import React from "react";
import { NavigationComponent } from "../../components/HomePageComponents";
import { Row, Col, Typography } from 'antd';
import { Image } from 'antd';
import "./HomePage.css"; // Create this CSS file for your custom styles

const { Title } = Typography;

const HomePage = () => {
  return (
    <>
      <NavigationComponent />
      <div className="home-page">
      <Row justify="center" align="middle" style={{ minHeight: '90vh' }}>
        <Col span={12}>
          <Title level={1} className="custom-title">
            Welcome to DICT - CAR File Management System
          </Title>
        </Col>
        <Col span={10}>
          <Image
            src="dict.png"
            alt="logo"
            preview={false} // Set this to false if you don't want the image to be clickable for a larger view
          />
        </Col>
      </Row>
      </div>
    </>
  );
};

export default HomePage;
