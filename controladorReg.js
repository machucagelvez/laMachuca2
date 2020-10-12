let campoNombres = document.getElementById("nombres")
let campoApellidos = document.getElementById("apellidos")
let campoCiudad = document.getElementById("ciudad")
let campoTelefono = document.getElementById("telefono")
let campoEmail = document.getElementById("inputEmail4")
let campoPassword = document.getElementById("inputPassword4")
let campoPublicidad = document.getElementById("publicidad")
let checkTerminos = document.getElementById("gridCheck")

let alerta1 = document.getElementById("alerta1")
let alerta2 = document.getElementById("alerta2")
let alerta3 = document.getElementById("alerta3")
let alerta4 = document.getElementById("alerta4")
let alerta5 = document.getElementById("alerta5")
let alerta6 = document.getElementById("alerta6")
let alerta7 = document.getElementById("alerta7")
let alerta8 = document.getElementById("alerta8")

let botonReg = document.getElementById("registrarse")

let campos = [campoNombres, campoApellidos, campoCiudad, campoTelefono, campoEmail, campoPassword, campoPublicidad]
let alertas = [alerta1, alerta2, alerta3, alerta4, alerta5, alerta6, alerta7]

botonReg.addEventListener("click", validarFormulario)

function validarFormulario(evento){
    evento.preventDefault()    
    for (i=0; i<campos.length; i++){
        if(campos[i].value==""){
            campos[i].classList.add("is-invalid")
            alertas[i].textContent = "Campo obligatorio"            
        }
        else{
            campos[i].classList.remove("is-invalid")
            alertas[i].textContent = ""  
        }
    }
    if(!checkTerminos.checked){
        checkTerminos.classList.add("is-invalid")
        alerta8.textContent = "Debe aceptar los términos y condiciones"
    }else{
        checkTerminos.classList.remove("is-invalid")
        alerta8.textContent = ""
    }
}



