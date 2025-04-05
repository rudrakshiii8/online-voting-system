import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0gMMQ8IDiaalzPbaYS1APlVD3CWVoirU",
  authDomain: "online-voting-system-48b19.firebaseapp.com",
  projectId: "online-voting-system-48b19",
  storageBucket: "online-voting-system-48b19.appspot.com",
  messagingSenderId: "1051505075526",
  appId: "1:1051505075526:web:197ab288396d188471f147",
  measurementId: "G-7CCZW8F1G9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
