// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCm5oaNPE6sdFbt_tbprRE4BBpqpDwmp-8",
    authDomain: "blogapp-c9c52.firebaseapp.com",
    projectId: "blogapp-c9c52",
    storageBucket: "blogapp-c9c52.appspot.com",
    messagingSenderId: "298598467990",
    appId: "1:298598467990:web:07b8d78e637ecbd46635b7"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };
