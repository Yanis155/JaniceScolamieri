<?php

$user = "root";
$pass = "";
$db = "rickandmorty";
$server = "LocalHost";
$conexion = new mysqli($server,$user,$pass,$db);

//chequeamos la conexion
if ($conexion-> connect_errno){
    die ("error de conexion");
}
?>