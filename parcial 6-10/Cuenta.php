<?php

class Cuenta{

    public $titular; //es una persona
    public $cantidad= 0;
    public $monto;
    
    public function __construct(string $titular, int $cantidad, int $monto)
    {
     $this->titular= $titular;
     $this->cantidad= $cantidad;
     $this->monto= $monto;
    }

    public function setTitular(string $titular)
    {
      $this->titular= $titular;
    };

    public function setCantidad(int $cantidad)
    {
     $this->cantidad= $cantidad;
    };
 
    public function getTitular()
    {
      $this->titular= $titular;
      return $titular
    };

    public function getCantidad()
    {
     $this->cantidad= $cantidad;
      return $cantidad;
    };

    public function mostrar()
    {
        $datosDeCuenta: "Titular: {$this->titular} <br/>
        Cantidad: {$this->cantidad}";
       return $datosDeCuenta;
    }

    public boolean ingresar($cantidad)
    {
      if ($cantidad>0 == true){
        $cantidad += $monto;
      }else ($cantidad= -1){

      };
    }

    public function retirar($cantidad){
      
      if($cantidad > $monto){
        return true;
      }else{
        $monto -= $cantidad;
        return false;
      }
       
    }
}




?>