


function listaCompras(){

    let valor =  document.getElementById("elemento");
    let lista = document.getElementById("lista");

    
    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = `${valor.value}`;
    
    lista.appendChild( nuevoLi);

}


function borrarElemento(){

    let lista = document.getElementById("lista");
    lista.removeChild(lista.lastChild);

}
let botonesCompra = document.querySelectorAll(".botonCompra");
let carrito = [];



for( let boton of botonesCompra){

    boton.addEventListener("click" , agregarCarrito);

}


console.log(botonesCompra);



function agregarCarrito(e){

    console.log(e.target);
    let hijo = e.target;
    let padre = hijo.parentNode.parentNode;
    let titulo = padre.querySelector("h5").textContent;
    let parrafo = padre.querySelector("p").textContent;
    let imagen = padre.querySelector("img").src;


    let producto = {
        nombre: titulo,
        desc:parrafo,
        img: imagen
    };


    carrito.push(producto)
    console.log(padre);
    console.log(titulo);

}















