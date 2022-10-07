<?php

public $nombre;
public $edad;
public $DNI;
public $edad;

public function __construct(string $nombre,int $edad, int $DNI)
{
    $this->nombre= $nombre;
    $this->apellido= $edad;
    $this->DNI= $DNI;
};

public function getNombre()
{
 $this-> nombre;
 return $nombre;
};

public function getEdad()
{
    $this-> edad;
    return $edad;
};

public function getDni()
{
    $this-> dni;
    return $dni;
};

public function setNombre($nombre)
{
  $this-> nombre= $nombre;
};

public function setApellido($apellido)
{
  $this-> apellido= $apellido;
};

public function setDni($DNI)
{
  $this-> DNI= $DNI;
};

public function Mostrar()
{
$datosPersonales= "Nombre: {$this->nombre} <br/>
Apellido: {$this->apellido} <br/>
Dni: {$this->dni}";
return $datosPersonales;

}

public function esMayorDeEdad()
{

    if($edad>=18 == true){
      echo ("Usted es mayor de edad");
    }else{
      return false;
    };
};

?>
