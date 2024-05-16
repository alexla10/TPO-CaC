function restar(){
    let valor = document.getElementById("num");
    console.log(valor.value)
    if(valor.textContent == 1){
        valor.textContent = "1"
    }else{
        let numero = parseInt(valor.textContent)
        numero--
        valor.textContent = numero.toString()
    }
}

function sumar(){
    let valor = document.getElementById("num");
    let numero = parseInt(valor.textContent)
    numero++
    valor.textContent = numero.toString()
}