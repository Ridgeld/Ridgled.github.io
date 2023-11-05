const sign_in_button = document.getElementById("sign_in");
const sign_up_button = document.getElementById("sign_up");

sign_in_button.addEventListener('click', function() {
    window.location.href = "login.html";
});

sign_up_button.addEventListener('click', function() {
    window.location.href = "registration.html";
});