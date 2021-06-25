//tipo primitivo no contiene propiedades ni metodos
//objeto tiene propiedades y metodos

let persona =   {
    nombre:'Juan',
    apellido:'suarez',
    edad:'22',
    email:'jperez@gmail.com',
    nombreCompleto: function(){
        return this.nombre+this.apellido;
    }
}
persona.apellido='mariano';

console.log(persona);

console.log(persona.nombreCompleto());

//Otra manera de crear objetos

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'saturno 15';
persona2.tel = '912662526';

console.log(persona2);

