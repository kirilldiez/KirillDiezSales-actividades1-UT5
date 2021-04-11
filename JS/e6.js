'use strict'

let Azul="AZUL";
let Verde="VERDE";
let Rojo="ROJO";

let letra = prompt("Escribe una letra:");
switch (letra){
    case 'a':
        document.write(Azul.fontcolor('blue'));
        break;
    case 'v':
        document.write(Verde.fontcolor('green'));
        break;
    case 'r':
        document.write(Rojo.fontcolor('FF00'));
        break;
    default:
        document.write("NO LO SE");
        break;
        
}