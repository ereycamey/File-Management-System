import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDoG28X3b6-Yfsd1yPyqlXxDdpMa817ODI",
  authDomain: "file-management-system-7ce64.firebaseapp.com",
  projectId: "file-management-system-7ce64",
  storageBucket: "file-management-system-7ce64.appspot.com",
  messagingSenderId: "123260201226",
  appId: "1:123260201226:web:a6dd5ab5e3d32f4f06f2f3"
};

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;
