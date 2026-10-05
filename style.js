function register() {

    let email = document.getElementById("email").value;
    let confirmEmail = document.getElementById("confirmEmail").value;

    let username = document.getElementById("username").value;
    let confirmUsername = document.getElementById("confirmUsername").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match!");
        return;
    }

    if (username !== confirmUsername) {
        alert("User IDs do not match!");
        return;
    }

    alert("Registration successful!");
}