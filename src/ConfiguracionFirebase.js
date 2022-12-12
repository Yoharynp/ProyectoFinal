import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCaNWHvYfNE-DlqJUpCq-CQw_OWYfhupRQ",
    authDomain: "muro-interactivo-itla-e1796.firebaseapp.com",
    projectId: "muro-interactivo-itla-e1796",
    storageBucket: "muro-interactivo-itla-e1796.appspot.com",
    messagingSenderId: "240320825818",
    appId: "1:240320825818:web:acc51c240cd5fc9711d8e3",
    measurementId: "G-KPL9PFWG6H"
};

const fire = firebase.initializeApp(firebaseConfig);
export const basededato=fire.firestore();
export default fire;


