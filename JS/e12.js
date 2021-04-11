'use strict';
let contador=0;

for(let i = 0; i<30;i++){

    let n=prompt("Introduce un número")
    if (n%5==0){
        contador++
    }
}

document.write("Hay ", contador, " números múltiplos de 5.");