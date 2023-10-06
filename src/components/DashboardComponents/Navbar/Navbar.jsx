import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { SignOutUser } from "../../../redux/ActionCreators/authActionCreators";
import logo from "../Navbar/logo.png";
const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm  p-3">
      <Link className="navbar-brand ms-5" to="/dashboard">
        <img
          src={logo}
          alt="DICT-CAR Logo"
          className="logo-image"
          style={{ width: '120px', height: 'auto' }} // Adjust the width and height as needed
        />
      </Link>


      <ul className="navbar-nav ms-auto me-5">
        {isAuthenticated ? (
          <>
            <li className="nav-item mx-2">
              <p className="my-0 mt-2 mx-2">
                <span className="text-dark">Welcome, </span>
                <span className="fw-bold">{user.displayName}</span>
              </p>
            </li>
            <li className="nav-item mx-2">
              <Link className="btn btn-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/login">
              <button
                className="btn btn-success"
                onClick={() => dispatch(SignOutUser())}
              >
                Logout
              </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item mx-2">
              <Link className="btn btn-primary btn-sm" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-success btn-sm" to="/register">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;