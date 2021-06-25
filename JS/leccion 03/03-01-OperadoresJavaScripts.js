let a = 3,b= "3",c=1;
/*
let z = a * b+c;
console.log(z);


z = c + a * b;
console.log(z);

let z = a!=b;
console.log(z);
z = a!==b;
console.log(z);


//DETERMINAR SI UN NUMERO ES PAR O IMPAR
let n1=20;
if(n1%2==0){
    console.log("este numero es par");
}else{
    console.log("este numero es impar");
}
//DETERMINAR SI ES MAYOR DE EDAD O NO
let edad = 17;
let mayor = 18
if(edad>=mayor){
    console.log("es mayor de edad");
}else{
    console.log("es menor de edad");
}

//OPERADOR TERNARIO

//CALCULAR SI UN NUMERO ES PAR O IMPAR

let numero = 20;
let resultado = (numero % 2 == 0 ) ? "NUMERO PAR" : "NUMERO IMPAR";
console.log(resultado);
console.log(typeof resultado);
*/
let edad = "15";
edad = Number(edad);
if (isNaN(edad)){    //NaN Not-A-Number => significa que no es un numero    
    console.log("no es un numero");
}else{
    let resultado1 = (edad>=18) ? "puede votar" : "no puede votar"    
    console.log(resultado1);
}