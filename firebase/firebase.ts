import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC_LrrCfYkLR6lt0z72yJxYTG1sgvBxjvw",
  authDomain: "dailyplanner-c1a07.firebaseapp.com",
  projectId: "dailyplanner-c1a07",
  storageBucket: "dailyplanner-c1a07.appspot.com",
  messagingSenderId: "192154314044",
  appId: "1:192154314044:web:40bf70f31652e0fe4f6a39",
};

const app = initializeApp(firebaseConfig);

import { doc, setDoc } from "firebase/firestore";
// const data = getFirestore(app);

//  await setDoc(doc(data, "toDoTest", "mario"), {
//   employment: "plumber",
//   outfitColor: "red",
//   specialAttack: "fireball"
// });

export const db = getFirestore(app);
