cantDias=prompt("ingrese cantidad de dias");
cantDias=Number(cantDias);
años=Math.floor(cantDias/365); 
semanas=Math.floor((cantDias%365)/7);
dias=(cantDias%365)%7;
console.log(años);
console.log(semanas);
console.log(dias);