import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input, Button, Card, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signInUser } from "../../redux/ActionCreators/authActionCreators";
import { Typography } from "antd";
import backgroundImage from "../AuthComponents/bground.jpg"; // Replace with the actual path

const LoginForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Title } = Typography;

  const handleSubmit = async (values) => {
    try {
      const { email, password } = values;
  
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
  
      await dispatch(signInUser(email, password));
      toast.success("Successfully login!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image here
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "750px",
        width: "1347px", // Set the width here (adjust as needed)
        margin: "0 auto", // Center the div horizontally
      }}
    >
      <Card style={{ width: 400, padding: 24,  borderRadius: 8, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}>
        <Col style={{ textAlign: "center" }}>
          <Title level={2}>LOGIN</Title>
        </Col>
        <Form
          form={form}
          name="login-form"
          initialValues={{
            email: "",
            password: "",
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" size="large" />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "100%", height: "40px" }}>
                Login
              </Button>
            </div>
          </Form.Item>
          <div style={{ textAlign: "right" }}>
            <Link to="/register">Not a member? Register</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
