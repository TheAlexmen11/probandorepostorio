//Declaracion de funcion

function miFuncion(a,b){
    console.log(arguments.length);
    console.log("suma : ", (a+b));
}

miFuncion(11,12);


//hoisting == se puede utilizar la funcion en cualquier posicion antes de la funcion o despues

function fnSuma(a,b){
    return a+b;
}

let resultado = fnSuma(5,23);

console.log(resultado);

//Declaracion de una Funcion de tipo expresion
let x = function(a,b){return a+b;}

resultado=x(1,2);

console.log(resultado);

//Declaracion  tipo self invoking  en Javascript
(function(a,b){
    console.log('ejecutando la funcion '+(a+b));
})(3,4);

console.log(typeof miFuncion);

//Declaracion funcion tipo flecha

let sumar = function (a,b){return a+b};

resultado = sumar(1,2);
console.log(resultado);

const sumarFunctionFlecja = (a,b) => a+b;
resultado = sumarFunctionFlecja(3,5);
console.log(resultado);


let resultado5 = sumarTodo(5,4,13,10,8,8,9,4,5,6,8,45,4,5);
function sumarTodo(){
    sumarTotal=0;
    for (let i = 0; i < arguments.length; i++) {
        sumarTotal+=arguments[i];
    }
    return sumarTotal;
}

console.log(resultado5);