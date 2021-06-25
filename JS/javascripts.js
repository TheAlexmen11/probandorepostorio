// // const $cards = document.querySelector('.cards');
// // const $card = document.createElement('div');
// // const $figure = document.createElement('figure');
// // const $img = document.createElement('img');
// // const $texto = document.createTextNode('Nature');
// // const $figcaption = document.createElement('figcaption');
// // let clonar ;

// // $img.setAttribute('src','https://placeimg.com/250/250/nature')
// // $img.setAttribute('alt','Nature')
// // $figcaption.appendChild($texto)
// // $figure.appendChild($img)
// // $figure.appendChild($figcaption)
// // $card.appendChild($figure)
// // $card.classList.add('card');
// // $cards.appendChild($card);

// // // $card.innerHTML = `
// // //     <figure>
// // //         <img src="https://placeimg.com/250/250/animal" alt="animal">
// // //         <figcaption>AZAR</figcaption>
// // //     </figure>

// // // `
// // // $cards.insertBefore($card,$cards.children[0]) //Insertamos antes de un elemento.

// // // $cards.removeChild($cards.children[0]) //Eliminamos un elemento del dom 

// // const $mylist = document.getElementById('mylist');
// // const $itemtext = document.createTextNode('chile');
// // const $list = document.createElement('li');
// // const $lista2 = document.getElementById('lista2');

// // $list.appendChild($itemtext);

// // $mylist.insertBefore($list,$mylist.children[1]);

// // const $template = document.getElementById('template').content;
// // const $cards = document.getElementById('cards') 
// // $template.querySelector('.card');
// // $template.querySelector('figure');
// // $template.querySelector('img');


// // let clone = document.importNode($template,true);

// // $cards.appendChild(clone)

// const $cards = document.getElementById('cards');
// const $newFigure = document.createElement('figure');
// const $card = document.createElement('div');
// $card.classList.add('card')
// let $contentCard = `
//     <img src="https://placeimg.com/250/250/animal" alt="animal">
//     <figcaption id="figcaption"></figcaption>
// `
// $card.appendChild($newFigure);
// // $cards.insertAdjacentElement("beforebegin",$card) // Hermano Anterior
// // $cards.insertAdjacentElement("afterbegin",$card)// Primero Hijo.
// // $cards.insertAdjacentElement("beforeend",$card)// ultimo Hijo.
// // $cards.insertAdjacentElement("afterend",$card)// Siguiente Hermano.
// $newFigure.insertAdjacentHTML("afterbegin",$contentCard)
// console.log($newFigure)
// $newFigure.querySelector('figcaption').insertAdjacentText('beforeend','animales')
// // $cards.insertAdjacentElement('afterbegin',$card)

// // $cards.prepend($card)//Lo agrega al hijo inicio.
// // $cards.append($card)//Lo agrega al hijo final.
// // $cards.before($card)//Hermano anterior
// // $cards.after($card)//Siguiente hermano


// const $button = document.getElementById('button')

// $button.addEventListener('click',()=>{
//     agregarCards();
// })



// const nombre = ['any','people','tech','nature'];
// let random = Math.round(Math.random()*4)
// console.log(random)
// function agregarCards(){
//     //variables
//     const $card = document.createElement('div');
//     const $figure = document.createElement('figure');
//     const $img = document.createElement('img');
//     const $figcaption = document.createElement('figcaption');
//     const $body = document.body;
//     //estilos
//     $card.classList.add('card');
//     $img.setAttribute('src',`https://placeimg.com/200/200/${nombre[random]}`);
//     $img.setAttribute('alt','any');
//     $figcaption.insertAdjacentText("beforeend",`${nombre[random]}`);
//     $figure.insertAdjacentElement("afterbegin",$img);
//     $figure.insertAdjacentElement("beforeend",$figcaption);
//     $card.insertAdjacentElement('afterbegin',$figure);
//     $body.insertAdjacentElement("beforeend",$card);
// }

/DOM/
// function holamundo(){
//     alert("Hola mundo")
//     console.log(event.type)
//     console.log(event.target)
// }

// const $eventoSemantico = document.getElementById('evento-semantico');
// const $eventomultiple = document.getElementById('evento-multiple');
// const remover = (e)=>{
//     $eventoSemantico.addEventListener('dblclick',())
// }
// $eventomultiple.addEventListener('click',holamundo)


const $div = document.querySelectorAll('div');

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`)
}
$div.forEach((ele)=>{
    ele.addEventListener('click',flujoEventos,true,true)
})