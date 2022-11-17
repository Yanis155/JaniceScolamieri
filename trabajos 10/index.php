<?php
    require_once("conection.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table border="3">

        <tr>
            <td> Id: </td>
            <td> Nombre: </td>
            <td> Apellido: </td>
            <td> Dni: </td>
            <td> Email: </td>
        </tr>

     <?php
      $consulta_personas= "select * from personas";
      $resultado_personas = $conexion -> query($consulta_personas);
     while ($registro= mysqli_fetch_array($resultado_personas, MYSQLI_ASSOC)){ 
          $id = $registro["id"];
          $nombre = $registro["nombre"];
          $apellido = $registro["apellido"];
          $dni = $registro["dni"];
          $email = $registro["email"];
        ?>
    
    <tr>
      <td> <?php echo $id?> </td>
      <td> <?php echo $nombre?> </td>
      <td> <?php echo $apellido?> </td>
      <td> <?php echo $dni?> </td>
      <td> <?php echo $email?> </td>
     </tr>
     <?php } ?>
    </table>

</body>
</html>
