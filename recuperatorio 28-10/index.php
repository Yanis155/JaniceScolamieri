<?php

require_once("Persona.php");
// require_once("CuentaJoven.php");
require_once("Cuenta.php");
require_once("Tarjeta.php");


$persona= new Persona("Parra","Javier",42,28358603,2028358603);

echo $persona-> mostrar();

echo $persona-> plan();
$tarjeta= new Tarjeta("Santander","3/27", "Junior");

echo $tarjeta-> datosTarjeta();;



?>
