/*
Ejemplos de tipos de datos en JavaScripts*/
/*
//tipo de dato string
var nombre = "Carlos";
console.log(nombre);
var nombre = 455;
console.log(typeof nombre);
//tipo numerico
var numero=1000;
console.log(numero);
//tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "554525"
}
//tipo de dato boolean(true , false)
var bandera = true;
console.log(typeof bandera);

//tipo de dato funcion
function mifuncion(){
    console.log("hola mundo");
}
mifuncion();

//tipo de dato simbolo
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//tipo de dato undefind
var x;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW','AUDI','VOLVO'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);

/*
/*CONCATENAR VARIABLE*/
/*
var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';

console.log(nombreCompleto2);

var x = nombre + 2 + 4;
console.log(x);
var x = nombre + (2 + 4);
console.log(x);
var x = 2 + 4 + nombre;
console.log(x);


let nombre = "Juan";
console.log(nombre);

const apellido = "perez"
apellido = "lara";


let nombreCompleto = "Juan Perez";
console.log(nombreCompleto);

let x , y ;
x = 10 , y = 20 ;
let z = x + y ;
console.log(z);

let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log( "Resultado de la mult:" + z);

z = a / b;
console.log( "Resultado de la division:" + z);

z = a % b;//residuo de la division
console.log( "Resultado de operacion modulo (residuo):" + z);

z = a ** b;
console.log( "Resultado de operador exponente:" + z);
*/
a=4;
b=3;

z= ++a;
console.log(z);
console.log(a);
z=b++;
console.log(z);
console.log(b);
y=--a;
console.log(y);
console.log(a);
y=b--;
console.log(y);
console.log(b);
