/*dias=Number(prompt("ingrese hora"));
if(dias>=6 && dias<=11){
    console.log("buenos dias");
}else if(dias>=12 && dias<=18){
    console.log("buenas tardes");
}else if(dias>=19 && dias<=24){
    console.log("buenas noches");
}else if(dias>=0 && dias<=6){
    console.log("durmiendo");
}else{
    console.log("error");
}*/
let numero = Number(prompt("ingrese un numerp"));
let numeroTexto = "VALOR DESCONOCIDO";

switch(numero){
    case 1:
        numeroTexto = "numero uno";
        break;
    case 2:
        numeroTexto = "numero dos";
        break;
    case 3:
        numeroTexto = "numero tres";
        break;
    case 4:
        numeroTexto = "numero cuatro";
        break;
    case 5:
        numeroTexto = "numero cinco";
        break;
    case 6:
        numeroTexto = "numero seis";
        break;
    case 7:
        numeroTexto = "numero siete";
        break;
    case 8:
        numeroTexto = "numero ocho";
        break;
    default:
        numeroTexto = "caso no encontrado";
}
alert(numeroTexto);
let mes = Number(prompt("ingrese un numerp"));
let numeroTexto = "VALOR DESCONOCIDO";

switch(mes){
    case 1:case 2:case 12:
        numeroTexto = "Invierno";
        break;
    case 3:case 4:case 5:
        numeroTexto = "Primavera";
        break;
    case 6:case 7:case 8:
        numeroTexto = "Verano";
        break;
    case 9:case 10:case 1:
        numeroTexto = "Otoño";
        break;
    default:
        numeroTexto = "caso no encontrado";
}
alert(numeroTexto);