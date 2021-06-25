let contador= 0;
/*
while (contador < 3) {
    console.log("aumente en uno la variable ="+contador);
    
    contador++;
}
do{
    console.log(contador);
    contador++;
}while(contador<3);
console.log("fin ciclo dowhile");*/
//etiquetas label en java scripts
inicio:
for (let index = 0; index <= 10; index++) {
    if(index%2 != 0){
        continue inicio;
    }
    console.log(index);
}