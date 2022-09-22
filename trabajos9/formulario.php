<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$dni = $_POST["dni"];
$fecha_nacimiento = $_POST["fecha_nacimiento"];
$sexo = $_POST["sexo"];
$color= $_POST["color"];

echo "El apellido es: $apellido"."<br>";
echo "El nombre es: $nombre"."<br>";
echo "La fecha de nacimiento: $fecha_nacimiento"."<br>";
echo "El sexo es: $sexo"."<br>";

if (isset($_POST["color"])) {
    
    foreach ($color as $colors) {
     echo "<li> color: $colors </li>";  
    }
   
};

?>