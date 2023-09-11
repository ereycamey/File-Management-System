import fire from "../../config/firebase";
import * as types from "../actionTypes/fileFolderActionTypes";

//actions

const addFolder = (payload) => ({
    type: types.CREATE_FOLDER,
    payload,
});

//action creators

export const createFolder = (data) => (dispatch) => {
    fire.firestore().collection("folders").add(data).then(async (folder)=>{
        const folderData = await (await folder.get()).data();
        dispatch(addFolder(folderData));
        alert("Folder created successfully!")
    })
};