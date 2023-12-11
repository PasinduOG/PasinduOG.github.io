// function change() {
//     var loginbox = document.getElementById("loginbox");
//     var registerbox = document.getElementById("registerbox");

//     loginbox.classList.toggle("d-none");
//     registerbox.classList.toggle("d-none");

// }

var email = document.forms["form"]["email"];
var password = document.forms["form"]["password"];

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", pass_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "2px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "2px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "2px solid rgba(243, 171, 0, 255)";
        email_error.style.display = "none";
        return true;
    }
}

function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "2px solid rgba(243, 171, 0, 255)";
        pass_error.style.display = "none";
        return true;
    }
}