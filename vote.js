function castVote(candidateName) {
    // Check if the user has already voted
    if (localStorage.getItem("hasVoted")) {
        alert("⚠️ You have already voted! You cannot vote again.");
        return;
    }

    let confirmVote = confirm(`Are you sure you want to vote for ${candidateName}?`);
    
    if (confirmVote) {
        // Store vote details in Local Storage
        localStorage.setItem("hasVoted", "true");
        localStorage.setItem("votedCandidate", candidateName);

        // Display confirmation message
        document.getElementById("confirmation-msg").innerText = `✅ Your vote for ${candidateName} has been recorded!`;
        
        // Disable all vote buttons after voting
        let buttons = document.querySelectorAll(".vote-btn");
        buttons.forEach(button => {
            button.disabled = true;
            button.style.background = "gray";
            button.style.cursor = "not-allowed";
            button.innerText = "Voted";
        });

        // Redirect to vote success page after a short delay
        setTimeout(() => {
            window.location.href = "vote_success.html";
        }, 1000);
    }
}

// Ensure vote buttons are disabled if user has already voted
window.onload = function () {
    let hasVoted = localStorage.getItem("hasVoted");
    let votedCandidate = localStorage.getItem("votedCandidate");

    if (hasVoted) {
        document.getElementById("confirmation-msg").innerText = `✅ You have already voted for ${votedCandidate}.`;

        let buttons = document.querySelectorAll(".vote-btn");
        buttons.forEach(button => {
            button.disabled = true;
            button.style.background = "gray";
            button.style.cursor = "not-allowed";
            button.innerText = "Voted";
        });
    }
};
