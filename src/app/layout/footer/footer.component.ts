import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule,AppComponent,FormsModule,RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  menuOption: string = ''
  
  onOption(menuOption: string){
    this.menuOption = menuOption
  }
}
