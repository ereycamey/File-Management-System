import React from "react";
import LoginForm from "../../../components/AuthComponents/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container-fluid">
            <h1 className="display-1 my-5 text-center">Login here</h1>
            <div className="row">
                <div className="col-md-5 mx-auto mt-5">
                    <LoginForm />
                    <Link to="/register" classname="text-end">
                        <p className="small">
                            Not a member? Register
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;