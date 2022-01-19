let menu = document.getElementsByClassName("nav__menu")[0];

let icon = document.getElementsByClassName("material-icons")[0]

const list = document.getElementsByClassName("nav__list")[0]
const a = document.querySelector("a")

function toogleFunction(ev) {

    if(list.classList.contains("hide")) {
        icon.innerText = "close"
        
        list.classList.remove("hide")
    } else {
        icon.innerText = "menu"

        list.classList.add("hide")

    }
}

function removeMenu(ev) {
    if(ev.target.classList.contains("nav__a")) {
        list.classList.add("hide");
        icon.innerText = "menu";
    }
}

menu.addEventListener("click", toogleFunction)

list.addEventListener("click", removeMenu)