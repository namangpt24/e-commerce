
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFa3HczctmiVUJZqlyNDNuXSzyeddFdmc",
  authDomain: "clone-32712.firebaseapp.com",
  projectId: "clone-32712",
  storageBucket: "clone-32712.appspot.com",
  messagingSenderId: "112116656867",
  appId: "1:112116656867:web:b8acfd9ddf10fa9aa0b3d6",
  measurementId: "G-LXJG1N43C9"
};

const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
const auth=getAuth();
export {db , auth};
