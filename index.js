let menu = document.getElementsByClassName("nav__menu")[0];

let icon = document.getElementsByClassName("material-icons")[0]

function toogleFunction(ev) {
    const list = document.getElementsByClassName("nav__list")[0]

    if(list.classList.contains("hide")) {
        icon.innerText = "close"
        
        list.classList.remove("hide")
    } else {
        icon.innerText = "menu"

        list.classList.add("hide")

    }
}

menu.addEventListener("click", toogleFunction)