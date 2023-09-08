const themeBtn = document.getElementById("theme-btn")
const themeIcon = document.getElementById("theme-icon")
var currentTheme = localStorage.getItem("currentTheme")

themeBtn.addEventListener("click", function () {
    currentTheme = currentTheme == "light" ? "dark" : "light"
    switchTheme()
})

function switchTheme() {

    if (currentTheme == "light") {
        document.body.removeAttribute("data-theme")
        themeIcon.className = "fa fa-moon text-dark"
        currentTheme = "light"
        localStorage.setItem("currentTheme", "light")
    } else {
        document.body.setAttribute("data-theme", "dark")
        themeIcon.className = "fa fa-sun text-dark"
        currentTheme = "dark"
        localStorage.setItem("currentTheme", "dark")
    }
}

switchTheme()