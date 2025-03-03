function verifyUser() {
    let username = document.getElementById("forgotUsername").value.trim();
    let user = localStorage.getItem(username);

    if (user) {
        alert("User found! You can now reset your password.");
        document.getElementById("resetPasswordSection").style.display = "block";
    } else {
        alert("User not found!");
    }
}

function resetPassword() {
    let username = document.getElementById("forgotUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value;

    let user = localStorage.getItem(username);

    if (user) {
        let parsedUser = JSON.parse(user);
        parsedUser.password = newPassword;
        localStorage.setItem(username, JSON.stringify(parsedUser));
        alert("Password reset successful! Please log in.");
        window.location.href = "login.html";
    }
}
