async function resetPassword() {
    let username = document.getElementById("forgotUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value;

    let repo = "login";
    let owner = "jeremy0711630";
    let filePath = "users.json";
    let token = "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";

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (!users[username]) {
        alert("User not found!");
        return;
    }

    users[username].password = newPassword;
    let success = await updateGitHubFile(repo, owner, filePath, users, token);
    if (success) alert("Password reset successful! Please log in.");
}
