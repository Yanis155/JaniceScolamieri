let socio1 =
{
  apellido: "parra",
  nombre: "javier",
  edad: 34,
  facturas: 1,
  dni: 28358603
};

let socio2 =
{
  apellido: "Scolamieri",
  nombre: "Janice",
  edad: 20,
  facturas: 5,
  dni: 44034927
};

let socio3 =
{
  apellido: "Brunac",
  nombre: "Zulma",
  edad: 43,
  facturas: 3,
  dni: 23169030
};

let socio4 =
{
  apellido: "Scolamieri",
  nombre: "Alcides",
  edad: 35,
  facturas: 20,
  dni: 13422040
};
let socio5 =
{
  apellido: "Yane",
  nombre: "Romero",
  edad: 19,
  facturas: 7,
  dni: 43255789
};

//guardo todos los objetos dentro de un array.
let sujetos = [socio1, socio2, socio3, socio4, socio5];

console.log(sujetos) //verifico que imprima el array en la consola

function validar() {

  let dni = document.getElementById("dni");
  let resultado = document.getElementById("resultado");
  let buscarsocio = Boolean();

  sujetos.forEach(sujetos => {

    //recorro todos los elementos del array osea sujetos y empiezo a comparar.
    if (sujetos.dni == dni.value) {  //si el sujeto.dni es igual al valor del dni que ingrese le indico que buscarsocio
      buscarsocio = sujetos;       //va a ser igual a sujetos osea el array que declare anteriormente e imprimo un console.log para verificar
      console.log(buscarsocio);
    }

    //si el buscar socio es distinto de false va a evaluar las facturas de los socios, y mostrara en distinto color de acuerdo a la factura
    if (buscarsocio != false) {

      //si las facturas son menores a 3 va a mostrar el color verde 
      if (buscarsocio.facturas <= 3) {
        document.getElementById("colores").innerHTML = buscarsocio.nombre + ' ' + buscarsocio.apellido + ',' + 'Facturas: ' + buscarsocio.facturas;
        document.getElementById("colores").style.background = "green";
      };
      //si las facturas son mayor a 3 y menor que 6 va a mostrar el color amarillo
      if (buscarsocio.facturas < 3 && buscarsocio.facturas >= 6) {
        document.getElementById("colores").innerHTML = buscarsocio.nombre + ' ' + buscarsocio.apellido + ', ' + 'Facturas: ' + buscarsocio.facturas;
        document.getElementById("colores").style.background = "yellow";
      };
      //si las facturas son menores mayores a 6 va a mostrar el color rojo 
      if (buscarsocio.facturas > 6) {
        document.getElementById("colores").innerHTML = buscarsocio.nombre + ' ' + buscarsocio.apellido + ', ' + 'Facturas: ' + buscarsocio.facturas;
        document.getElementById("colores").style.background = "red";
      };
      //de lo contrario si no existe el dni quiere decir que es falso, no encontro nada y mostrara no existe en color rojo
    } else {

      document.getElementById("colores").innerHTML = "no existe";
      document.getElementById("colores").style.background = "red";

    }
  })
}
