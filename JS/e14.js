'use strict';

let n;
let mayor=0;

while (n!=0 || n<0){
n=prompt("Introduce un número");

if (n > mayor){
    mayor=n;
}

console.log(mayor);
}

document.write("El mayor es: " , mayor);