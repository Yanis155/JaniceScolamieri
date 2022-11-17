<?php

$user = "root";
$pass = "";
$db = "formulario";
$server = "LocalHost";
$conexion = new mysqli($server,$user,$pass,$db);

if ($conexion -> connect_errno){
    die("error de conexión");
}
?>