document.getElementById("Registerform").addEventListener("submit", async function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    let repo = "login";
    let owner = "jeremy0711630";
    let filePath = "users.json";
    let token = "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"; // Secure this in a backend!

    let users = await fetchUsersFromGitHub(repo, owner, filePath, token);

    if (users[username]) {
        alert("Username already exists. Try another one.");
        return;
    }

    users[username] = { password: password, role: role };

    let success = await updateGitHubFile(repo, owner, filePath, users, token);
    if (success) alert("REGISTRATION SUCCESSFUL!");
});

async function fetchUsersFromGitHub(repo, owner, filePath, token) {
    let url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    let headers = { Authorization: `token ${token}` };

    let response = await fetch(url, { headers });
    if (!response.ok) return {}; // Return empty if no file found

    let data = await response.json();
    let content = atob(data.content);
    return JSON.parse(content);
}

async function updateGitHubFile(repo, owner, filePath, data, token) {
    let url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
    let headers = { Authorization: `token ${token}`, "Content-Type": "application/json" };

    let response = await fetch(url, { headers });
    let fileData = await response.json();
    let sha = fileData.sha;

    let updatedContent = btoa(JSON.stringify(data, null, 2));

    let payload = {
        message: "Updated users.json",
        content: updatedContent,
        sha: sha
    };

    let updateResponse = await fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(payload)
    });

    return updateResponse.ok;
}
