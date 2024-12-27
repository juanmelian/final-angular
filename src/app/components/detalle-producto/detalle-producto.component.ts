import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: any;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ){}

  ngOnInit() {

    this.route.params.subscribe(params=>{

      const _id = params['id'].toString();
      // console.log('_id', _id);

      this.productoService.getProductoById(_id);

    });
  }

}
