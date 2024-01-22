let first = document.createElement("div")

let bouteil = document.querySelector("#house")

let topDIV = document.querySelector(".container2").querySelector(".top")

let botDiv = document.querySelector(".container2").querySelector(".bot")

    for (let i = 0; i < 4; i++) {
        let first = document.createElement("div")
        first.setAttribute("class", "ml")
        let text = "250 ml"
        first.innerText = text
        topDIV.appendChild(first)
        
    }
    for (let i = 0; i < 4; i++) {
        let first = document.createElement("div")
        first.setAttribute("class", "ml")
        let text = "250 ml"
        first.innerText = text
        botDiv.appendChild(first)
        
    }

document.querySelectorAll(".ml")[0].addEventListener("click", () => {
    document.querySelectorAll(".ml")[0].style.background = "red"
    bouteil.style.paddingBottom = "15px"

})