'use strict';

let base=parseInt(prompt("Introduce un número"));
let multi=parseInt(prompt("Introduce otro número"));
let r=0;

while(multi != 0){
    r= r + parseInt(base);
    multi=multi-1;
}
document.write("El producto entre los dos números es: ", r);