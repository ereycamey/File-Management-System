import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Input, Button, Card, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { signInUser } from "../../redux/ActionCreators/authActionCreators";
import { Typography } from "antd";

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
      navigate("/dashboard");
    } catch (error) {
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card
        style={{ width: 600, padding: 24, borderRadius: 8, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
      >
         <Col style={{ textAlign: "center" }}>
        <Title >
            LOGIN 
          </Title></Col>
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
            <Input prefix={<UserOutlined />} placeholder="Email" />
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
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "200px", height: "40px" }}>
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
