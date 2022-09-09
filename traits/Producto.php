<?php

trait Producto{
   public $strProducto;
   public $fltPrecio;
   public $intStock;
    
   public function setProducto(string $Producto, float $Precio, int $Stock){
    $this->strProducto= $Producto;  
    $this->fltPrecio= $Precio;
    $this->intStock= $Stock;
    }

   public function getProducto(){
    $strInfo= "<h2> Carrito <h2/>
    <hr>
     Producto: {$this->strProducto} <br/>
     <hr>
     Precio: {$this->fltPrecio} <br/>
     <hr>
     Stock: {$this->intStock}";
     return $strInfo;
   }

   public function setStock(int $cantidad){
     $this->intStock= $this->intStock - $cantidad;
   }
}



?>