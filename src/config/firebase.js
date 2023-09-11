import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAHHrNk4elVz2iqPgW0HXbaaCV6HhVbN7I",
    authDomain: "file-management-system-2337d.firebaseapp.com",
    projectId: "file-management-system-2337d",
    storageBucket: "file-management-system-2337d.appspot.com",
    messagingSenderId: "539949416691",
    appId: "1:539949416691:web:1e4eb1b7519c5f4da6b786"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;