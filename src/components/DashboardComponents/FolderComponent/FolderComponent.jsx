import { shallowEqual, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Empty } from "antd";
import ShowItems from "../ShowItems/ShowItems";

const FolderComponent = () => {
  const { folderId } = useParams();

  const { currentFolderData, childFolders, childFiles } = useSelector(
    (state) => ({
      currentFolderData: state.filefolders.userFolders.find(
        (folder) => folder.docId === folderId
      )?.data,
      childFolders: state.filefolders.userFolders.filter(
        (folder) => folder.data.parent === folderId
      ),
      childFiles: state.filefolders.userFiles.filter(
        (file) => file.data.parent === folderId
      ),
    }),
    shallowEqual
  );

  const createdFiles =
    childFiles && childFiles.filter((file) => file.data.url === null);
  const uploadedFiles =
    childFiles && childFiles.filter((file) => file.data.data === null);

  return (
    <div>
      {childFolders.length > 0 || childFiles.length > 0 ? (
        <>
          {childFolders.length > 0 && (
            <div>
                <ShowItems title={"Created Folders"} type={"folder"} items={childFolders} />
            </div>
          )}
          {createdFiles && createdFiles.length > 0 && (
            <div>
                <ShowItems title={"Created Files"} type={"file"} items={createdFiles} />
            </div>
          )}
          {uploadedFiles && uploadedFiles.length > 0 && (
            <div>
                <ShowItems title={"Uploaded Files"} type={"file"} items={uploadedFiles} />
            </div>
          )}
        </>
      ) : (
        <Empty description={<span className="text-center my-5">Empty Folder</span>} />
      )}
    </div>
  );
};

export default FolderComponent;
