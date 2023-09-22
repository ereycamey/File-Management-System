import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { updateFileData } from "../../../redux/ActionCreators/fileFolderActionCreators";
import { useDispatch } from "react-redux";
import { Button, Typography } from "antd";

const { Text } = Typography;

const Header = ({ fileName, fileId, fileData, prevFileData }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg mt-1 navbar-light bg-white shadow-sm">
      <p className="navbar-brand my-0 fw-bold ms-5">{fileName}</p>
      {fileData !== prevFileData && (
       <Text className="my-0 fw-bold ms-2 text-danger">*[modified]</Text>
      )}

      <ul className="navbar-nav ms-auto me-5">
        <li className="nav-item mx-2">
        <Button
            type="primary"
            disabled={fileData === prevFileData}
            onClick={() => {
              dispatch(updateFileData(fileId, fileData))
                .then(() => {
                  toast.success
                })
                .catch(() => {
                  toast.error("Something went wrong!");
                });
            }}
          >
            <FontAwesomeIcon icon={faSave} /> &nbsp; Save
          </Button>
        </li>
        <li className="nav-item">
          <Button
            type="default"
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} /> &nbsp; Go Back
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;