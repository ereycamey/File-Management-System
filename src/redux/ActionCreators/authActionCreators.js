import * as types from "../actionTypes/authActionTypes"
import fire from "../../config/firebase";

const loginUser = (payload) => {
    return {
        type: types.LOGIN_USER,
        payload,
    };
};

const logoutUser = () => {
    return {
        type: types.SIGN_OUT_USER,
    };
};

//action creator

export const signInUser = (email, password) => (dispatch) => {
    fire
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        alert("Invalid Email or password!");
    });
};

export const signUpUser = (name, email, password) => (dispatch) => {
    fire.auth().createUserWithEmailAndPassword(email, password).then((user) => {
        fire.auth().currentUser.updateProfile({
            displayName: name,
        }).then(()=>{
            const currentUser = fire.auth().currentUser;
            dispatch (
                loginUser({
                    uid: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                })
            )
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error) => {
       if(error.code === "auth/email-already-in-use") {
        alert("Email already in use!");
       }
       if(error.code === "auth/invalid-email"){
        alert("Invalid email1");
       }
       if (error.code === "auth/weak-password"){
        alert("Weak password!");
       }
    });
};

export const SignOutUser = () => (dispatch) => {
    dispatch(logoutUser());
}