const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function IniciarSesion(){
    let email = document.getElementById("email");
    if(email.value.trim() == "" || (!regexEmail.test(email.value))){
        email.classList.add("campo-invalido");
        document.getElementById("warning-email").textContent = "Email invalido";
        return false;
    }else{
        email.classList.remove("campo-invalido");
        document.getElementById("warning-email").textContent = "";
    }

    let password = document.getElementById("password");
    if(password.value.trim() == ""){
        password.classList.add("campo-invalido");
        document.getElementById("warning-password").textContent = "Contraseña invalida";
        return false;
    }else{
        password.classList.remove("campo-invalido");
        document.getElementById("warning-password").textContent = "";
    }
    
    return true;
}
