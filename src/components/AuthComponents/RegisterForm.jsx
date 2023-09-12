import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../redux/ActionCreators/authActionCreators";
import { toast } from "react-toastify";
import { Form, Input, Button, Typography, Card, Col } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { name, email, password, passwordConfirmation } = values;
    if (!name || !email || !password || !passwordConfirmation) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== passwordConfirmation) {
      toast.error("Passwords do not match");
      return;
    }

    await dispatch(signUpUser(name, email, password));
    navigate("/dashboard");
  };

  const cardStyle = {
    width: "600px", // Adjust the width as needed
    margin: "auto", // Center the card horizontally
    marginTop: "20px", // Add top margin
    padding: "20px", // Add some padding
    borderRadius: 8, 
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
  };

  return (
    <Card className="register-card" style={cardStyle}>
      <Col style={{ textAlign: "center" }}>
      <Title>REGISTER</Title></Col>
      <Form
        form={form}
        name="register"
        onFinish={handleSubmit}
        initialValues={{
          name: "",
          email: "",
          password: "",
          passwordConfirmation: "",
        }}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter a password" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="passwordConfirmation"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
        <Form.Item>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button type="primary" htmlType="submit" style={{ width: "200px", height: "40px" }}>
                Register
              </Button>
            </div>
        </Form.Item>
        <div style={{ textAlign: "right" }}>
            <Link to="/login">Already a member? Login</Link>
          </div>
      </Form>
    </Card>
  );
};

export default RegisterForm;
