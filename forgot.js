async function resetPassword() {
    let username = document.getElementById("forgotUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value;

    let repo = "your_github_repo";
    let owner = "your_github_username";
    let filePath = "users.json";
    let token = "your_personal_access_token";

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (!users[username]) {
        alert("User not found!");
        return;
    }

    users[username].password = newPassword;
    let success = await updateGitHubFile(repo, owner, filePath, users, token);
    if (success) alert("Password reset successful! Please log in.");
}
