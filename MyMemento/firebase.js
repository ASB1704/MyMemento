import { initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDokCsFnCD-mR9kNqL068sndNZoqsjFeFo",
  authDomain: "mymemento-d99af.firebaseapp.com",
  projectId: "mymemento-d99af",
  storageBucket: "mymemento-d99af.appspot.com",
  messagingSenderId: "437510556382",
  appId: "1:437510556382:web:cb031bf13aabfdd89d104f",
  measurementId: "G-3VXZ3C1381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
