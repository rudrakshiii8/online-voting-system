import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { app } from './firebase-config.js';

const db = getFirestore(app);
const auth = getAuth();

function castVote(candidate) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userId = user.uid;
      const voteRef = doc(db, "votes", userId);

      const docSnap = await getDoc(voteRef);
      if (docSnap.exists()) {
        alert("You have already voted!");
      } else {
        await setDoc(voteRef, {
          email: user.email,
          candidate: candidate,
          timestamp: new Date()
        });
        alert("Vote cast successfully!");
        window.location.href = "vote_success.html";
      }
    } else {
      alert("Please login first!");
      window.location.href = "login.html";
    }
  });
}

// Make function available globally (required for button onclick)
window.castVote = castVote;
