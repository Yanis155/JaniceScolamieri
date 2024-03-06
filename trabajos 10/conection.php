<?php

$user = "root";
$pass = "";
$db = "personas";
$server = "LocalHost";
$conexion = mysqli($server,$user,$pass,$db);

if ($conexion -> connect_errno){
    echo('Error de conexión con la Base de datos: '.$db);

}
echo('Conexión establecida <br><br>');

    $consulta=  "SELECT * FROM Personas";
    $resultado= $conexion->query($consulta);
    $num_filas= mysqli_num_rows($resultado);

    for ($i=0; $i<$num_filas; $i++){
        $num_filas=  $conexion->$resultado->fetch_array($resultado=MYSQLI_ASSOC);
    }

?>