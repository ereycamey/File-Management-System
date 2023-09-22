import React, { useState } from "react";
import { Modal, Input, Button, notification } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { createFolder } from "../../../redux/ActionCreators/fileFolderActionCreators";
import { toast } from "react-toastify";

const CreateFolder = ({ setIsCreateFolderModalOpen }) => {
  const [folderName, setFolderName] = useState("");

  const { userFolders, user, currentFolder, currentFolderData } = useSelector(
    (state) => ({
      userFolders: state.filefolders.userFolders,
      user: state.auth.user,
      currentFolder: state.filefolders.currentFolder,
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === state.filefolders.currentFolder
      ),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const checkFolderAlreadyPresent = (name) => {
    const folderPresent = userFolders
      .filter((folder) => folder.data.parent === currentFolder)
      .find((fldr) => fldr.data.name === name);
    return folderPresent ? true : false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (folderName) {
      if (folderName.length > 3) {
        if (!checkFolderAlreadyPresent(folderName)) {
          const data = {
            createdAt: new Date(),
            name: folderName,
            userId: user.uid,
            createdBy: user.displayName,
            path:
              currentFolder === "root"
                ? []
                : [...currentFolderData?.data.path, currentFolder],
            parent: currentFolder,
            lastAccessed: null,
            updatedAt: new Date(),
          };
          dispatch(createFolder(data));
          toast.success // Display success toast
        } else {
          toast.info("Folder already present");
        }
      } else {
        toast.info("Folder name must be at least 3 characters");
      }
    } else {
      toast.info("Folder name cannot be empty");
    }
  };

  return (
    <Modal
      title="Create Folder"
      visible={true}
      onCancel={() => setIsCreateFolderModalOpen(false)}
      footer={null}
      style={{ maxWidth: "600px" }}
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Input
            placeholder="Folder Name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="mt-3"
          style={{ width: "100%" }}
        >
          Create Folder
        </Button>
      </form>
    </Modal>
  );
};

export default CreateFolder;
