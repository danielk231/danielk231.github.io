function goToSecretPage() {
    var password = prompt("Please enter the secret password:");
    if (password === "pookie123") {
        window.location.href = "secret.html";
    } else {
        alert("Incorrect password. Access denied.");
    }
}
