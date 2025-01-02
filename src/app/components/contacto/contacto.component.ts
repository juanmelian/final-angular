import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  formulario: FormGroup;

  constructor(public fb: FormBuilder) {

    this.formulario = this.fb.group({
      nombre: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      mensaje: ['',[Validators.required]]
    })


  }



  enviar(){
    if(this.formulario.valid){
      console.log(this.formulario.value)
      alert('Formulario enviado!');
    }else{
      alert('complete los campos');
    }

  }



}
