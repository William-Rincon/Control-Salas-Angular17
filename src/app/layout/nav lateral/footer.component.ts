import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';
import { DocentesComponent } from '../../pages/docentes/docentes.component';
import {  HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule,AppComponent,FormsModule,RouterOutlet,DocentesComponent,HttpClientModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  menuOption: string = ''
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
