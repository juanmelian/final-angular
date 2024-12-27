import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'contacto', component: ContactoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
