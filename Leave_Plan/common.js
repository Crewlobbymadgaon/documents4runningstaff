// 🔥 Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBvQgNXa_go05Pfa-JHCAtXkPR7DrC9RZQ",
  authDomain: "leave-plan-alp.firebaseapp.com",
  projectId: "leave-plan-alp",
  storageBucket: "leave-plan-alp.firebasestorage.app",
  messagingSenderId: "992690471054",
  appId: "1:992690471054:web:272b6b1adf2802b90789df"
};

// 🔥 INIT
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 🔥 KEEP USER LOGGED IN
setPersistence(auth, browserLocalPersistence)
  .catch(() => console.log("Persistence failed"));

// 🔐 AUTH CHECK FUNCTION
export function checkAuth(callback) {

  const loader = document.getElementById("loading");
  if (loader) loader.style.display = "block";

  onAuthStateChanged(auth, (user) => {

    if (user) {

      if (loader) loader.style.display = "none";
      callback(user);

    } else {

      // prevent redirect loop
      if (!window.location.pathname.includes("index.html")) {
        window.location.replace("index.html");
      }

    }

  });

}

// 🚪 LOGOUT FUNCTION
export function logout() {
  signOut(auth)
    .then(() => window.location.replace("index.html"))
    .catch(() => alert("Logout failed"));
}

// 🔁 EXPORT
export { auth, db };
