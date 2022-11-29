import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9oV9gfSvUo_LCx5jG3CsmHdgDqIO9x_Y",
  authDomain: "lecture-bot-9c131.firebaseapp.com",
  projectId: "lecture-bot-9c131",
  storageBucket: "lecture-bot-9c131.appspot.com",
  messagingSenderId: "864873011751",
  appId: "1:864873011751:web:f61c3f61e897480213cc02",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
