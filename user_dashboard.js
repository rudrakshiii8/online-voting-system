// Function to cast vote
function castVote(candidateName) {
    if (localStorage.getItem("hasVoted")) {
        alert("❌ You have already voted! You cannot vote again.");
        return;
    }

    let confirmVote = confirm(`🗳️ Are you sure you want to vote for ${candidateName}?`);
    if (confirmVote) {
        document.getElementById("voting-status").innerText = `Voted for ${candidateName}`;
        alert("✅ Your vote has been recorded successfully!");

        // Save vote status in Local Storage
        localStorage.setItem("hasVoted", "true");
        localStorage.setItem("votedCandidate", candidateName);

        disableVotingButtons();
    }
}

// Function to disable voting buttons after voting
function disableVotingButtons() {
    let buttons = document.querySelectorAll(".vote-btn");
    buttons.forEach(button => {
        button.disabled = true;
        button.style.background = "gray";
        button.style.cursor = "not-allowed";
    });
}

// Function to check if user has already voted (Using Local Storage)
window.onload = function () {
    let hasVoted = localStorage.getItem("hasVoted");
    let votedCandidate = localStorage.getItem("votedCandidate");

    if (hasVoted) {
        document.getElementById("voting-status").innerText = `Voted for ${votedCandidate}`;
        disableVotingButtons();
    }
};

// Function for Logout
function logoutUser() {
    let confirmLogout = confirm("🚪 Are you sure you want to logout?");
    if (confirmLogout) {
        // Remove login session
        localStorage.removeItem("hasVoted");  // Reset voting status
        localStorage.removeItem("votedCandidate");
        localStorage.removeItem("loggedInUser");  // Reset user session

        window.location.href = "login.html"; // Redirect to login page
    }
}
