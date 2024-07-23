import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      usernane: ['', [Validators.required, ]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    })
  }


  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {

  }

  
  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

  
}
