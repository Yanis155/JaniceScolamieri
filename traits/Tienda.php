<?php

require_once("Producto.php");
require_once("Carrito.php");

class Tienda{

   use Producto,Carrito;
   public $fltTotal=0;

   public function getCarrito(){
    $this->fltTotal= $this->fltPrecio*$this->intCantidad;
    $infoCarrito= "<h2> Carrito <h2/>
    Producto: {$this->strProducto} <br>
    <hr>
    Cantidad: {$this->intCantidad} <br>
    <hr>
    Precio: {$this->fltPrecio} <br>
    <hr>
    Total: {$this->fltTotal}";
    return $infoCarrito;
   }


}


?>