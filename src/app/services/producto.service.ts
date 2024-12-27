import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private porductos = [
    { id: 1, nombre: 'Producto 1', descripcion: 'Descripción 1', precio: 20 },
    { id: 2, nombre: 'Producto 2', descripcion: 'Descripción 2', precio: 30 },
    { id: 3, nombre: 'Producto 3', descripcion: 'Descripción 3', precio: 50 },
  ];

  constructor() { }

  getProductos(){
    return this.porductos;
  }

  getProductoById(id: number){
    return this.porductos.find((producto)=> producto.id === id);
  }
}
