import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";  

const firebaseConfig = {
  apiKey: "AIzaSyAms5Z5qoHsAncd5xE3TMo0yyXyM881i-s",
  authDomain: "netflix-clone-1cb3a.firebaseapp.com",
  projectId: "netflix-clone-1cb3a",
  storageBucket: "netflix-clone-1cb3a.appspot.com",
  messagingSenderId: "584979601200",
  appId: "1:584979601200:web:a91959b0bc735b01ccdaf5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);    
const auth = getAuth(app);

export { auth };
export default db;
