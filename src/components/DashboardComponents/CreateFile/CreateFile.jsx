import { useState, useEffect } from "react";
import { Button, Input, Modal, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createFile } from "../../../redux/ActionCreators/fileFolderActionCreators";
import { toast } from "react-toastify";

const CreateFile = ({ setIsCreateFileModalOpen }) => {
  const [fileName, setFileName] = useState("");
  const [success, setSuccess] = useState(false);

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
      setFileName("");
      setSuccess(false);
      setIsCreateFileModalOpen(false);
    }
  }, [success]);

  const checkFileAlreadyPresent = (name, ext) => {
    if (!ext) {
      name = name + ".txt";
    }
    const filePresent = userFiles
      .filter((file) => file.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);
    if (filePresent) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fileName) {
      if (fileName.length > 3) {
        //check file extension
        let extension = false;
        if (fileName.split(".").length > 1) {
          extension = true;
        }
        if (!checkFileAlreadyPresent(fileName, extension)) {
          const data = {
            createdAt: new Date(),
            name: extension ? fileName : `${fileName}.txt`,
            userId: user.uid,
            createdBy: user.displayName,
            path:
              currentFolder === "root"
                ? []
                : [...currentFolderData?.data.path, currentFolder],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),
            extension: extension ? fileName.split(".")[1] : "txt",
            data: "",
            url: null,
          };
          dispatch(createFile(data, (success) => {
            if (success) {
              setSuccess(true);
              toast.success // Corrected method name
            } else {
              toast.error("File creation failed"); // You can display an error toast if creation fails
            }
          }));
        } else {
          toast.info("File already present");
        }
      } else {
        toast.info("File name must be at least 3 characters");
      }
    } else {
      toast.info("File name cannot be empty");
    }
  };


  return (
    <Modal
      title="Create File"
      visible={true}
      onCancel={() => setIsCreateFileModalOpen(false)}
      footer={null}
      style={{ maxWidth: "600px" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            placeholder="File name e.g. file.txt, index.html, index.php, index.ts, index.js"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-3"
          style={{ width: "100%" }}
        >
          Create File
        </Button>
      </form>
    </Modal>
  );
};

export default CreateFile;
