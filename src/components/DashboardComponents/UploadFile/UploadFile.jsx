import { useState, useEffect } from "react";
import { Modal, Button } from "antd"; // Import Ant Design components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { uploadFile } from "../../../redux/ActionCreators/fileFolderActionCreators";
import { toast } from "react-toastify";

const UploadFile = ({ setIsFileUploadModalOpen }) => {
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const [visible, setVisible] = useState(true); // State for Ant Design modal visibility

  const { userFiles, user, currentFolder, currentFolderData } = useSelector(
    (state) => ({
      userFiles: state.filefolders.userFiles,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === state.filefolders.currentFolder
      ),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      setFile("");
      setSuccess(false);
      setIsFileUploadModalOpen(false);
    }
  }, [success]);

  const checkFileAlreadyPresent = (name) => {
    const filePresent = userFiles
      .filter((file) => file.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);
    if (filePresent) {
      return true;
    } else {
      return false;
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setIsFileUploadModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      if (!checkFileAlreadyPresent(file.name)) {
        const data = {
          createdAt: new Date(),
          name: file.name,
          userId: user.uid,
          createdBy: user.displayName,
          path:
            currentFolder === "root"
              ? []
              : [...currentFolderData?.data.path, currentFolder],
          parent: currentFolder,
          lastAccessed: null,
          updatedAt: new Date(),
          extension: file.name.split(".")[1],
          data: null,
          url: "",
        };
        dispatch(uploadFile(file, data, setSuccess));
      } else {
        toast.info("File already present");
      }
    } else {
      toast.info("File name cannot be empty");
    }
  };

  return (
    <Modal
      title="Upload File"
      visible={visible}
      onCancel={handleCancel}
      footer={null} // Remove the default modal footer
      destroyOnClose={true} // Unmount the modal on close
    >
      <div className="d-flex flex-column align-items-center">
        <form className="mt-3 w-100" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="file"
              className="form-control"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <Button
            type="primary"
            htmlType="submit"
            className="mt-3"
            style={{ width: "100%" }}
          >
            Upload File
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default UploadFile;
