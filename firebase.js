import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4HUphtnhQRE5uOAuyRMdYiPMcvp8PE2s",
  authDomain: "habi-phone-auth.firebaseapp.com",
  projectId: "habi-phone-auth",
  storageBucket: "habi-phone-auth.appspot.com",
  messagingSenderId: "512850235766",
  appId: "1:512850235766:web:a2659453158ffed9d9aa57",
  measurementId: "G-4NJJRVV40S",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // <-- You need this
const analytics = getAnalytics(app);

export { auth }; // <-- Export it!
