<?php

class CuentaJoven extends 
public $bonificacion= 0;

    public function construct(int $bonificacion,string $titular, int $cantidad){
        parent::__construct($titular, $cantidad);
        $this->bonificacion= $bonificacion;

    }

    public function setBonificacion(int $bonificacion)
    {
      $this->bonificacion= $bonificacion;
    };

    public function getBonificacion()
    {
      $this->bonificacion= $bonificacion * 0.2;
      return $bonificacion;
    };

    public function esTitularValido()
    {
        if($edad>18 && $edad<25 == true){  //si es mayor a 18 años y menor a 25 entonces va a ser igual a ser verdadero
            echo "usted es titular de una cuenta bancaria"; //muestra que es titular porque puede tener una cuenta
        }else{
            return false; //si no cumple con lo anterior retornara false;
        }
    }

    public function mostrar()
    {
        echo "Cuenta Joven".$this->$bonificacion;
    }
}
?>

