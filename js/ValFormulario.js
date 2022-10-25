var formulario = document.getElementsByName('formulario')[0]  

var validarNombre = function (e) {
    if (formulario.Nombre.value == 0) { 
        alert("Completa el campo nombre")
        e.preventDefault() 
        }
    else if(formulario.Nombre.value.length >= 15){
        alert("Nombre muy largo")
        e.preventDefault()
    }
}
var validarEmail = function (e) {
    if (formulario.Email.value == 0) { 
        alert("Completa el campo Email")
        e.preventDefault() 
        }
}
var validarTelefono = function (e) {
    if (formulario.Telefono.value == 0) { 
        alert("Completa el campo Telefono")
        e.preventDefault() 
        }
}
var validarMensaje = function (e) {
    console.log(formulario.InputsTA.value)
    if (formulario.InputsTA.value == 0) { 
        alert("Completa el campo Mensaje")
        e.preventDefault() 
        }
}

var validar = function (e) {  
    validarNombre(e)
    validarEmail(e)
    validarTelefono(e)
    validarMensaje(e)
    
}
formulario.addEventListener("submit", validar)


