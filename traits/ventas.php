<?php

require_once("Tienda.php");

$objProducto= new Tienda();  //puedo utilizar todos los metodos de prod, tienda y carrito en objProducto (reutilizo codigo)

$objProducto-> setProducto("Alfajor",250,100);

echo $objProducto-> getProducto();
echo "<br>";
$objProducto-> setCarrito("Alfajor",5);
echo $objProducto-> getProducto();


?>