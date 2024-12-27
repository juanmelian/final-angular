import { Component } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productos: any = [];

  constructor(private productoService: ProductoService){

    this.productos = this.productoService.getProductos();

    console.log('productos', this.productos);

  }




}
