import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.getElementById("login-btn").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const email = result.user.email.toLowerCase();  // make it lowercase for safety
      console.log("Logged in email:", email);  // 👀 check console output

      // Check if the logged-in email is the admin email
      if (email === "thakurrudrakshi90@gmail.com") {
        window.location.href = "admin.html";
      } else {
        window.location.href = "vote.html";
      }
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
});
