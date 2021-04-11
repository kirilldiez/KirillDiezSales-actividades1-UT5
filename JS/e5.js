'use strict'

function upperCase(){
var x = nombre.charAt(0);

let offset = (x.charCodeAt(0));

if(offset >= 65 && offset <= 90){
    document.write("El nombre de usuario ",nombre, " ya empieza por mayúsculas");
}
else{
    document.write("El nombre de usuario ", nombre, " debe empezar por mayúscula");
}
}

let nombre =prompt("Escriba su nombre:");
upperCase(nombre);