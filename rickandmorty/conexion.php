<?php


include_once("main.php");

$id= $_POST["id"];
$nombre= $_POST["nombre"];
$especie= $_POST["especie"];
$estado= $_POST["estado"];
$tipo= $_POST["tipo"];
$genero= $_POST["genero"];
$origen= $_POST["origen"];
$ubicacion= $_POST["ubicacion"];
$imagen= $_POST["imagen"];
static $insertarPersonaje;

$consulta= "SELECT * FROM personajes where id_personaje".$id;
$result= mysqli_query($conexion,$consulta);

$filas= $result->num_rows; //Obtiene el número de filas de un resultado. Orientado a objetos

    if ($result==0){
        $insertarPersonaje = $conexion->stmt_init(); //Guardo todos los datos en la bd de los personajes, mediante una var insertarPersonaje

            if ($insertarPersonaje->prepare($sql= "INSERT INTO personajes (id_personaje,nombre,especie,estado,tipo,genero,origen,ubicación,foto) 
            VALUES ('?,?,?,?,?,?,?,?')")){ //realizo una consulta donde el metodo prepare va a preparar mi sentencia sql.

                $insertarPersonaje->bind_param($id_personaje,$nombre,$especie,$estado,$tipo,$genero,$origen,$ubicacion,$foto); //Enlaza variables para los marcadores de parámetros en la instrucción SQL que se envía a mysqli_prepare().
                $insertarPersonaje->execute(); 
                printf("El personaje fue registrado éxitosamente");

                exit;
            }else{
                printf("Hubo un error al cargar el personaje");
            }
    }


// $verificar_personajes= mysqli_query($conexion, "SELECT * FROM personajes where id_personaje= '$id'"); esto es por procedimiento
// if (mysqli_num_rows($verificar_personajes) > 0){ 
//     echo "El personaje ya esta registrado";
//     exit;
// }

?>
