document.getElementById("Loginform").addEventListener("submit", async function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let repo = "login";
    let owner = "jeremy0711630";
    let filePath = "users.json";
    let token = "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";

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (users[username] && users[username].password === password && users[username].role === role) {
        alert(role.charAt(0).toUpperCase() + role.slice(1) + " login successful!");
    } else {
        alert("Incorrect credentials!");
    }
});
