import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeFolder } from "../../../redux/ActionCreators/fileFolderActionCreators";

import "./ShowItems.css";
import { Card } from "antd";

const ShowItems = ({ title, items, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDblClick = (itemId) => {
    if (type === "folder") {
      dispatch(changeFolder(itemId));
      navigate(`/dashboard/folder/${itemId}`);
    } else {
      navigate(`/dashboard/file/${itemId}`);
    }
  };

  return (
    <div className="w-100">
    <h4 className="text-center border-bottom py-2">{title}</h4>
    <div className="row gap-2 p-4 flex-wrap">
      {items.map((item, index) => {
        return (
          <div key={index * 55} className="col-md-2">
          <Card
            className="py-3 text-center border"
            onDoubleClick={() => handleDblClick(item.docId)}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {type === "folder" ? (
                <FontAwesomeIcon icon={faFolder} size="4x" className="mb-3" />
              ) : (
                <FontAwesomeIcon icon={faFileAlt} size="4x" className="mb-3" />
              )}
              <div>{item.data.name}</div>
            </div>
          </Card>
        </div>
        
        );
      })}
    </div>
  </div>
  );
};

export default ShowItems;