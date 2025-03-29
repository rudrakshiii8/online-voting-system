// Dummy data (Backend se fetch karne ka function baad me add karenge)
const candidates = [
    { name: "Candidate 1", party: "XYZ", votes: 120 },
    { name: "Candidate 2", party: "ABC", votes: 150 }
];

// Function to display results
function displayResults() {
    let tableBody = document.getElementById("results-table");
    tableBody.innerHTML = "";

    candidates.forEach(candidate => {
        let row = `<tr>
            <td>${candidate.name}</td>
            <td>${candidate.party}</td>
            <td>${candidate.votes}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Page load hone par results show karo
window.onload = displayResults;
