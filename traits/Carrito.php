<?php

trait Carrito {
    public $strProducto; //las 3 primeras letras pertenecen a un string
    public $intCantidad;  //integer
  
    public function setCarrito(string $Producto, int $Cantidad){
      $this->strProducto= $Producto;
      $this-> intCantidad= $Cantidad;
    }

}



?>