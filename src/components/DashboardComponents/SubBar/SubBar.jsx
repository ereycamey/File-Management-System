import "./SubBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faFileUpload, faFolderPlus } from "@fortawesome/free-solid-svg-icons";
const SubBar = ({ setIsCreateFolderModalOpen }) => {


    return (
        <nav className="navbar navbar-expand-lg  mt-2 navbar-light bg-white py-2 px-5 ">
           <p>Root</p> 

           <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2">
                <button className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faFileUpload}/>&nbsp;
                    Upload File
                </button>
            </li>
            <li className="nav-item mx-2">
                <button className="btn btn-outline-dark">
                <FontAwesomeIcon icon={faFileAlt}/>&nbsp;
                    Create File
                </button>
            </li>
            <li className="nav-item ms-2">
                <button className="btn btn-outline-dark" onClick={() => setIsCreateFolderModalOpen(true)}>
                <FontAwesomeIcon icon={faFolderPlus}/>&nbsp;
                    Create Folder
                </button>
            </li>
           </ul>
        </nav>
    )
} 
export default SubBar;