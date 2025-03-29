document.addEventListener("DOMContentLoaded", function () {
    const candidateForm = document.getElementById("candidateForm");
    const candidateList = document.getElementById("candidateList");

    // Load candidates from localStorage
    function loadCandidates() {
        candidateList.innerHTML = "";
        const candidates = JSON.parse(localStorage.getItem("candidates")) || [];

        candidates.forEach((candidate, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${candidate.name}</td>
                <td>${candidate.party}</td>
                <td>
                    <button onclick="deleteCandidate(${index})">Delete</button>
                </td>
            `;

            candidateList.appendChild(row);
        });
    }

    // Add new candidate
    candidateForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const candidateName = document.getElementById("candidateName").value.trim();
        const candidateParty = document.getElementById("candidateParty").value.trim();

        if (candidateName && candidateParty) {
            const candidates = JSON.parse(localStorage.getItem("candidates")) || [];
            candidates.push({ name: candidateName, party: candidateParty });
            localStorage.setItem("candidates", JSON.stringify(candidates));

            candidateForm.reset();
            loadCandidates();
        } else {
            alert("Please fill all fields.");
        }
    });

    // Delete candidate
    window.deleteCandidate = function (index) {
        const candidates = JSON.parse(localStorage.getItem("candidates")) || [];
        candidates.splice(index, 1);
        localStorage.setItem("candidates", JSON.stringify(candidates));
        loadCandidates();
    };

    // Load candidates on page load
    loadCandidates();
});
