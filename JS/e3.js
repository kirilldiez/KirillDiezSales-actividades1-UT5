'use strict'

function division(p,s) {

    let division = 0;
    

    if(p==0){
        document.write("El primer número es 0");
    }
    else {
        division= p/s;
        document.write("El resultado de la división es: ", division );
    }
}
let p = prompt("Escribe un número");
let s = prompt("Escribe otro número");

division(p,s);
