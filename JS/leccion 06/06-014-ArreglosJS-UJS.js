//let auto = new Array('BMW','Mercedez','volvo');

const autos = ['BMW','Mercedez','volvo'];
console.log(autos);
console.log(autos[2]);


for (let i = 0; i< autos.length; i++) {
  console.log(autos[i]);;
    }

autos[1]="cambio";
console.log(autos[1]);

autos.push('Audi');

console.log(autos);

console.log(autos.length);

autos[autos.length]='cadilag';
console.log(autos);

console.log(Array.isArray(autos));

console.log( autos instanceof Array)