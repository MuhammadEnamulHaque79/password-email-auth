import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjHSs_487Fa8oB-7QA-4AbxyOaPpPmbdU",
  authDomain: "email-password-auth-project.firebaseapp.com",
  projectId: "email-password-auth-project",
  storageBucket: "email-password-auth-project.appspot.com",
  messagingSenderId: "933199729791",
  appId: "1:933199729791:web:be4801810a4519c6ef9b4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;