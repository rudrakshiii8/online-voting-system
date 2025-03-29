// Dummy Users Data (Backend ke liye future me replace hoga)
const users = [
    { id: 1, name: "Rohan Sharma", email: "rohan@gmail.com", role: "Voter" },
    { id: 2, name: "Anjali Mehta", email: "anjali@gmail.com", role: "Voter" },
    { id: 3, name: "Admin", email: "admin@gmail.com", role: "Admin" }
];

// Table me users ko display karne ka function
function loadUsers() {
    let table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((user) => {
        let row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><button class="action-btn" onclick="deleteUser(${user.id})">Delete</button></td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

// User delete karne ka function (Dummy, future me backend connect hoga)
function deleteUser(id) {
    let index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        loadUsers(); // Table ko refresh karna
    }
}

// Page load hone par users show karna
document.addEventListener("DOMContentLoaded", loadUsers);
