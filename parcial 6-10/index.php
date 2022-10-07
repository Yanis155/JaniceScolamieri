<?php

require_once("Persona.php");
require_once("CuentaJoven.php");
require_once("Cuenta.php");


$objcuenta= new Cuenta();
$titular= "Janice scolamieri";
$monto= 
$cantidad= 2500;
$bonificacion= 20;

/echo $objcuenta-> setCantidad(500);
echo $objcuenta-> mostrar();

?>