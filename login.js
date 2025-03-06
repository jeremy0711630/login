document.getElementById("Loginform").addEventListener("submit", async function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let repo = "your_github_repo";
    let owner = "your_github_username";
    let filePath = "users.json";
    let token = "your_personal_access_token";

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (users[username] && users[username].password === password && users[username].role === role) {
        alert(role.charAt(0).toUpperCase() + role.slice(1) + " login successful!");
    } else {
        alert("Incorrect credentials!");
    }
});
