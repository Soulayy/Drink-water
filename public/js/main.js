let first = document.createElement("div")

let bouteil = document.querySelector("#house")
let text = bouteil.querySelector(".text")
console.log(text);
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
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 80%, rgba(255,128,0,1) 100%);"
    text.innerText = "12.5%"
    if (document.querySelectorAll(".ml")[1].style.background == "red") {
        document.querySelectorAll(".ml")[1].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[2].style.background == "red") {
        document.querySelectorAll(".ml")[2].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[3].style.background == "red") {
        document.querySelectorAll(".ml")[3].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    
})
document.querySelectorAll(".ml")[1].addEventListener("click", () => {
    document.querySelectorAll(".ml")[1].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 42%, rgba(255,128,0,1) 81%);"
    text.innerText = "25%"
    if (document.querySelectorAll(".ml")[2].style.background == "red") {
        document.querySelectorAll(".ml")[2].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[3].style.background == "red") {
        document.querySelectorAll(".ml")[3].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
        
})
document.querySelectorAll(".ml")[2].addEventListener("click", () => {
    document.querySelectorAll(".ml")[2].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 22%, rgba(255,128,0,1) 71%);"
    text.innerText = "37.5%"
    if (document.querySelectorAll(".ml")[3].style.background == "red") {
        document.querySelectorAll(".ml")[3].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
})

document.querySelectorAll(".ml")[3].addEventListener("click", () => {
    document.querySelectorAll(".ml")[3].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 1%, rgba(255,128,0,1) 59%);"
    text.innerText = "50%"
    document.querySelectorAll(".ml")[2].style.background = "red"
    document.querySelectorAll(".ml")[1].style.background = "red"
    document.querySelectorAll(".ml")[0].style.background = "red"
})

//!

document.querySelectorAll(".ml")[4].addEventListener("click", () => {
    document.querySelectorAll(".ml")[4].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,128,0,1) 59%);"
    text.innerText = "62.5%"
    if (document.querySelectorAll(".ml")[5].style.background == "red") {
        document.querySelectorAll(".ml")[5].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[6].style.background == "red") {
        document.querySelectorAll(".ml")[6].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[7].style.background == "red") {
        document.querySelectorAll(".ml")[7].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    
})
document.querySelectorAll(".ml")[5].addEventListener("click", () => {
    document.querySelectorAll(".ml")[5].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,128,0,1) 38%);"
    text.innerText = "75%"
    if (document.querySelectorAll(".ml")[6].style.background == "red") {
        document.querySelectorAll(".ml")[6].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
    if (document.querySelectorAll(".ml")[7].style.background == "red") {
        document.querySelectorAll(".ml")[7].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
        
})
document.querySelectorAll(".ml")[6].addEventListener("click", () => {
    document.querySelectorAll(".ml")[6].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,128,0,1) 27%);"
    text.innerText = "87.5%"
    if (document.querySelectorAll(".ml")[7].style.background == "red") {
        document.querySelectorAll(".ml")[7].style = "background: rgb(0,67,180);background: linear-gradient(228deg, rgba(0,67,180,1) 0%, rgba(0,211,255,1) 100%);"   
    }
})

document.querySelectorAll(".ml")[7].addEventListener("click", () => {
    document.querySelectorAll(".ml")[7].style.background = "red"
    bouteil.style = "background: rgb(255,255,255);background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,128,0,1) 0%);"
    text.innerText = "100%"
    document.querySelectorAll(".ml")[6].style.background = "red"
    document.querySelectorAll(".ml")[5].style.background = "red"
    document.querySelectorAll(".ml")[4].style.background = "red"
})