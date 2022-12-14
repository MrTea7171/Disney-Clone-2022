import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAFalwNDdkU9PFAUoJKAf8RiU7fmYJa5ek",
    authDomain: "dinseyplus-clone-253b4.firebaseapp.com",
    projectId: "dinseyplus-clone-253b4",
    storageBucket: "dinseyplus-clone-253b4.appspot.com",
    messagingSenderId: "766396328762",
    appId: "1:766396328762:web:c0d5c96d262f667283fe03",
    measurementId: "G-KYZ2GFMR6V"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const db= getFirestore(firebaseApp);
  const auth=getAuth(firebaseApp);
  const provider=new GoogleAuthProvider(auth);
  const storage=getStorage(firebaseApp);

  export{auth,provider,storage};
  export default db;