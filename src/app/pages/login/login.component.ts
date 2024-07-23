import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {  
formularioContacto!: FormGroup;

constructor( private formBuilder: FormBuilder){
  this.formularioContacto = this.formBuilder.group({
    usuario: ['',[Validators.required, Validators.minLength(4)]],
    password: ['',[Validators.required, Validators.minLength(5)]],

  }) 
 }

 hasErrors(field: string, typeError: string) {
  return this.formularioContacto.get(field)?.hasError(typeError) && this.formularioContacto.get(field)?.touched;
}

enviar(event: Event) {
  event.preventDefault();
  console.log(this.formularioContacto.value);
}
 
ngOnInit(): void{
  }

}

