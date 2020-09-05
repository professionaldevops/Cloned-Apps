import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAQ3tVgnOCD5k4qdcWdJRhiftUiHxttTEg",
    authDomain: "slack-clone-53138.firebaseapp.com",
    databaseURL: "https://slack-clone-53138.firebaseio.com",
    projectId: "slack-clone-53138",
    storageBucket: "slack-clone-53138.appspot.com",
    messagingSenderId: "375976366145",
    appId: "1:375976366145:web:f02c4d5d7b49cff16b76c0",
    measurementId: "G-SW5B4TN22X"
  };

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;
