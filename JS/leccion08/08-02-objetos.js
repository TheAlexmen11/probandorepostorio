let persona =   {
    nombre:'Juan',
    apellido:'suarez',
    edad:'22',
    email:'jperez@gmail.com',
    nombreCompleto: function(){
        return this.nombre+this.apellido;
    }
}

console.log(persona.nombre);
console.log( persona['apellido']);


//parar acceder a las propiedades de el objeto
for (propiedades in persona){
    console.log(propiedades);
    console.log(persona[propiedades]);
}