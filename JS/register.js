const requisitos = document.querySelector(".requisitos")
const passw = document.getElementById("password")
const longitud = document.getElementById("longitud")
const mayus = document.querySelector("#mayus")
const num = document.querySelector("#numero")
const especial = document.getElementById("especial")

function Mostrar() {
    requisitos.setAttribute("style","display:block")
}

const icon1 = document.getElementById("icon-1")
const icon2 = document.getElementById("icon-2")
const icon3 = document.getElementById("icon-3")
const icon4 = document.getElementById("icon-4")

const regexMayus = /[A-Z]/
const regexNum = /[0-9]/
const regexEsp = /[#"!$@&]/
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

let condLongitud = false
let condMayus = false
let condNum = false
let condEsp = false

function validarPassword(e) {
    
    if (e.target.value.length.trim() < 8) {
        longitud.setAttribute("class","invalido")
        icon1.setAttribute("class", "fa-solid fa-circle-xmark invalido")
        condLongitud = false
    } else {
        longitud.setAttribute("class","valido")
        icon1.setAttribute("class", "fa-solid fa-circle-check valido")
        condLongitud = true
    }

    if(regexMayus.test(e.target.value)){
        mayus.setAttribute("class","valido")
        icon2.setAttribute("class", "fa-solid fa-circle-check valido")
        condMayus = true
    }else{
        mayus.setAttribute("class","invalido")
        icon2.setAttribute("class", "fa-solid fa-circle-xmark invalido")
        condMayus = false
    }

    if(regexNum.test(e.target.value)){
        num.setAttribute("class","valido")
        icon3.setAttribute("class", "fa-solid fa-circle-check valido")
        condNum = true
    }else{
        num.setAttribute("class","invalido")
        icon3.setAttribute("class", "fa-solid fa-circle-xmark invalido")
        condNum = false
    }

    if(regexEsp.test(e.target.value)){
        especial.setAttribute("class","valido")
        icon4.setAttribute("class", "fa-solid fa-circle-check valido")
        condEsp = true
    }else{
        especial.setAttribute("class","invalido")
        icon4.setAttribute("class", "fa-solid fa-circle-xmark invalido")
        condEsp = false
    }
}

passw.addEventListener("input", validarPassword)

const submitBtn = document.getElementById("enviar")

const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const email = document.getElementById("email")

const warningName = document.getElementById("warning-name")
const warningLastname = document.getElementById("warning-lastname")
const warningEmail = document.getElementById("warning-email")
const warningPassword = document.getElementById("warning-password")
const warningPasswordCond = document.getElementById("warning-password-cond")
const terminos = document.getElementById("terminos-check")
const enviarBtn = document.getElementById("enviar")

let Nombre = true
let lastname = true
let Email = true
let Password = true
let PasswordCondition = true

function habilitarSubmit(){
    if(terminos.checked){
        enviarBtn.removeAttribute("disabled")
    }else{
        enviarBtn.setAttribute("disabled","true")
    }
}

function validarFormulario(){
    if(nombre.value.trim() === ""){
        Nombre = false
        nombre.classList.add("campo-invalido")
        warningName.innerHTML = "*Campo obligatorio"
    }else{
        Nombre = true
        nombre.classList.remove("campo-invalido")
        warningName.innerHTML = ""
    }

    if(apellido.value.trim() === ""){
        lastname = false
        apellido.classList.add("campo-invalido")
        warningLastname.innerHTML = "*Campo obligatorio"
    }else{
        lastname = true
        apellido.classList.remove("campo-invalido")
        warningLastname.innerHTML = ""
    }

    if(email.value.trim() === ""){
        Email = false
        email.classList.add("campo-invalido")
        warningEmail.innerHTML = "*Campo obligatorio"
    }else if(!regexEmail.test(email.value)){
        Email = false
        email.classList.add("campo-invalido")
        warningEmail.innerHTML = "*Ingresa un email valido"
    }else{
        Email = true
        email.classList.remove("campo-invalido")
        warningEmail.innerHTML = ""
    }

    if(!(condLongitud && condMayus && condNum && condEsp)){
        PasswordCondition = false
        passw.classList.add("campo-invalido")
        warningPasswordCond.innerHTML = "*La contraseña debe cumplir los requisitos"
    }else{
        PasswordCondition = true
        passw.classList.remove("campo-invalido")
        warningPasswordCond.innerHTML = ""
    }

    if(passw.value.trim() === ""){
        Password = false
        passw.classList.add("campo-invalido")
        warningPassword.innerHTML = "*Campo obligatorio"
    }else{
        Password = true
        passw.classList.remove("campo-invalido")
        warningPassword.innerHTML = ""
    }
    
    return Nombre && lastname && Email && Password && PasswordCondition
}
