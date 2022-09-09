// id si existe o no se encuentra el libro
//si existe muestra el autor, titulo y stock, 
//si el stock es menor o igual a 5: rojo o verde
//y desp mostrar el valor si es menor o igual 100 hacer un descuento del 20%
//y si el editorial es solo la flor se le hace un 5% de desc. 
let libro1 =
{
    id: 1,
    autor: "Shakespere",
    titulo: "El principito",
    stock: 20,
    valor: 100,
    editorial: "la flor",
};

let libro2 =
{
    id: 2,
    autor: "Gabriel garcia Marquez",
    titulo: "Mi planta naranja lima",
    stock: 20,
    valor: 90,
    editorial: "el dia online",
};

let libro3 =
{
    id: 3,
    autor: "Cervantes",
    titulo: "Don quijote de la mancha",
    stock: 20,
    valor: 37,
    editorial: "Infobae",
};

let libro4 =
{
    id: 4,
    autor: "Dostoievski",
    titulo: "Crimen y castigo",
    stock: 20,
    valor: 25,
    editorial: "Mente",
};
let libro5 =
{
    id: 5,
    autor: "Jorge luis borges",
    titulo: "",
    stock: 20,
    valor: 50,
    editorial: "la flor",
};

//guardo todos los objetos dentro de un array.
let libreria = [libro1, libro2, libro3, libro4, libro5];

console.log(libreria);

function validar() {

    let id = document.getElementById("id");
    let colores = document.getElementById("resultado");
    let buscarlibreria = Boolean();

    libreria.forEach(libreria => {  //recorro los elementos del array 

        if (libreria.id == id.value) { //evaluo si existe el id que introduje 
            buscarlibreria = libreria; 
            console.log(buscarlibreria);
        };

        if (buscarlibreria != false) {
         colores.innerHTML = "El autor es:" +''+buscarlibreria.autor + " " + "El titulo del libro es:"+ buscarlibreria.titulo;

          if (buscarlibreria.stock <= 5) {
          colores.style.backgroundColor = "Green";
          }; 

        } else {
            colores.innerHTML = "el libro que introdujiste no existe, prueba con otro";
            colores.style.backgroundColor = "pink";

        }
    }
    )
}

function descuento(valor) {
  
    let libreria = [libro1, libro2, libro3, libro4, libro5];
    
    aux = valor * 0,20;
    aux1 = valor * 0,5;
    if (valor >= 100) {
     aux = aux*0,20;
     return aux;
}
     if (valor.editorial >= 100) {
      aux1= aux1*0,5;
     return aux1;
}
valor.innerHTML= descuento("el descuento es de el 20%");
valor.innerHTML= descuento("el descuento es de el 5%");
}
