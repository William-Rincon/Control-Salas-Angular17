import { Component } from '@angular/core';
import { FooterComponent } from '../nav lateral/footer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FooterComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
