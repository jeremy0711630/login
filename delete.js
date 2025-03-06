document.getElementById("deleteform").addEventListener("submit", async function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();

    let repo = "your_github_repo";
    let owner = "your_github_username";
    let filePath = "users.json";
    let token = "your_personal_access_token";

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (!users[username]) {
        alert("User not found!");
        return;
    }

    let confirmDelete = prompt("Are you sure you want to delete your account? (yes/no)");
    if (confirmDelete.toLowerCase() !== "yes") {
        alert("Deletion canceled.");
        return;
    }

    delete users[username];

    let success = await updateGitHubFile(repo, owner, filePath, users, token);
    if (success) alert("Account deleted successfully!");
});
