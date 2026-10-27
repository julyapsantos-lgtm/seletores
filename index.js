// const btnLogin = document.getElementById("btn-login")
// const divAzul = document.getElementById("azul")


// btnLogin.addEventListener("click", () => {
//     divAzul.style.backgroundColor = 'green'
// })
// console.log(btnLogin)

const cards = document.getElementsByClassName("card")

cards[0].style.background = "pink"

const imagens = document.getElementsByTagName("img")
console.log('Temos ${imagens.longht}')

const texto = document.querySelector(".destaque > p")
texto.textContent = "Hackeado!"

const botoes = document.querySelectorAll("button[disabled]")
botoes.forEach(btn => {
    btn.removeAttribute("disabled")
})