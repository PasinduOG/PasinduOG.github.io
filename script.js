var bg1 = new Audio("PUBG_Login.mp3");
bg1.loop = true;
var bg2 = new Audio("PUBG_Register.mp3")
bg2.loop = true;

function login() {
    bg1.play();
    bg2.pause();
}

function register() {
    bg2.play();
    bg1.pause();
}

function change() {
    var loginbox = document.getElementById("loginbox");
    var registerbox = document.getElementById("registerbox");

    loginbox.classList.toggle("d-none");
    registerbox.classList.toggle("d-none");

}