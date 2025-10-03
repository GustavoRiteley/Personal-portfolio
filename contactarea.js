const buttonContactGithub = document.getElementById('buttonContactGithub');
const buttonContactLinkedin = document.getElementById('buttonContactLinkedin');
const buttonContactEmail = document.getElementById('buttonContactEmail');
const buttonContactWhatsApp = document.getElementById('buttonContactWhatsApp');

if (buttonContactGithub) {
    buttonContactGithub.addEventListener("click", function () {
        window.open("https://github.com/GustavoRiteley", "_blank");
    });
}
if (buttonContactLinkedin) {
    buttonContactLinkedin.addEventListener("click", function () {
        window.open("https://www.linkedin.com/in/gustavo-ritley-2599a4291", "_blank");
    });
}
if (buttonContactEmail) {
    buttonContactEmail.addEventListener("click", function () {
        window.location.href = "mailto:https://www.ritleygustavo@gmail.com";
    });
}
if (buttonContactWhatsApp) {
    buttonContactWhatsApp.addEventListener("click", function () {
        window.open("https://wa.me/83993046857", "_blank");
    });
}
