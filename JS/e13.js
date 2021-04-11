'use strict';

let i;

function nPares(n){

for(i=1;i<n;i++){

    if(i%2==0 || i%7==0){
        document.write(i +"\n")
    }
    
}
return i;
}

let n=prompt("Introduce un número");
document.write(nPares(n));