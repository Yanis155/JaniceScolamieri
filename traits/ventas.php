<?php

require_once("Tienda.php");

$objProducto= new Tienda();  //puedo utilizar todos los metodos de prod, tienda y carrito en objProducto (reutilizo codigo)

$strProducto= "Teclado";  //las variables ayudan a que si tuviera una bd estas var solo tendria que cambiar su valor y ayuda a reutilizar cod
$fltPrecio= 115;        //si tuviera otro precio o se actualiza por otro, la var fltP precio solo cambia el 115 por otro valor
$intStock= 10;          //lo mismo pasa con el stock o cantidad vendida.
$intCantidadVendida= 3;


$objProducto-> setProducto($strProducto,$fltPrecio,$intStock);
echo $objProducto-> getProducto();

echo "<br>";
$objProducto-> setCarrito($strProducto,$intCantidadVendida);
$objProducto-> setStock($intCantidadVendida);

echo $objProducto-> getProducto();
echo $objProducto-> getCarrito();

?>
