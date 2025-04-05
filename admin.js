import { db } from './firebase-config.js';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Show total stats
async function loadDashboard() {
  const usersSnapshot = await getDocs(collection(db, "votes"));
  document.getElementById("totalUsers").innerText = usersSnapshot.size;

  let voteCount = 0;
  usersSnapshot.forEach(doc => {
    if (doc.data().candidate) voteCount++;
  });
  document.getElementById("totalVotes").innerText = voteCount;

  const candidatesSnapshot = await getDocs(collection(db, "candidates"));
  document.getElementById("totalCandidates").innerText = candidatesSnapshot.size;

  // Display candidate names
  const list = document.getElementById("candidateList");
  list.innerHTML = '';
  candidatesSnapshot.forEach(doc => {
    const li = document.createElement("li");
    li.textContent = doc.data().name;
    list.appendChild(li);
  });
}

// Add candidate
async function addCandidate() {
  const name = document.getElementById("newCandidateName").value.trim();
  if (name === '') return alert("Please enter a name.");
  await addDoc(collection(db, "candidates"), { name });
  alert(`${name} added.`);
  document.getElementById("newCandidateName").value = '';
  loadDashboard();
}

// Delete candidate
async function deleteCandidate() {
  const name = document.getElementById("deleteCandidateName").value.trim();
  if (name === '') return alert("Please enter a name to delete.");

  const snapshot = await getDocs(collection(db, "candidates"));
  let found = false;
  snapshot.forEach(async (docSnap) => {
    if (docSnap.data().name === name) {
      await deleteDoc(doc(db, "candidates", docSnap.id));
      found = true;
      alert(`${name} deleted.`);
      loadDashboard();
    }
  });

  if (!found) alert("Candidate not found.");
  document.getElementById("deleteCandidateName").value = '';
}

// Logout
function logout() {
  const auth = getAuth();
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
}

// Load dashboard on start
loadDashboard();

// Expose functions to HTML
window.addCandidate = addCandidate;
window.deleteCandidate = deleteCandidate;
window.logout = logout;
