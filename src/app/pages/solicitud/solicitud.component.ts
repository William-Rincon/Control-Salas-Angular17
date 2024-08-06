import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../layout/nav lateral/footer.component';
import { DocentesComponent } from '../docentes/docentes.component';
import { HoraCortaPipe } from '../../hora-corta.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitudesUsuario, solitlist } from '../docentes/docente.Smock';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [FooterComponent,DocentesComponent, HoraCortaPipe,DatePipe,CommonModule,FormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent  implements OnInit{

  solitlist: SolicitudesUsuario[] = solitlist;
  searchText = '';
  pageSize = 5;
  currentPage = 0;

  ngOnInit() {
    this.currentPage = 0;
  }

  get filteredReportlist() {
    return this.solitlist.filter(reporte =>
      reporte.t_aula.toLowerCase().includes(this.searchText.toLowerCase()) ||
      reporte.t_facultad.toString().includes(this.searchText) ||
      reporte.t_nombrecompleto.toString().includes(this.searchText) ||
      reporte.t_software?.toString().includes(this.searchText) ||
      reporte.sft?.toString().includes(this.searchText) ||
      reporte.t_estado?.toString().includes(this.searchText) ||
      reporte.t_observaciones?.toString().includes(this.searchText) ||
      reporte.d_fecharequerido.toString().includes(this.searchText) ||
      reporte.d_fechasolicitud.toString().includes(this.searchText)

    );
  }

  get paginatedReports() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.filteredReportlist.slice(startIndex, endIndex);
  }

  updateSearchText(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchText = inputElement.value.trim().toLowerCase();
    this.currentPage = 0; // Reset to first page on search
  }

  updatePageSize(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const newPageSize = parseInt(selectElement.value, 10);
    this.pageSize = newPageSize;
    this.currentPage = 0; // Reset to first page on page size change
  }

  nextPage() {
    // const nextPageIndex = this.currentPage + 1;
    const totalPages = Math.ceil(this.filteredReportlist.length / this.pageSize);
    // Verificamos si hay una página siguiente válida
    if (this.currentPage < totalPages - 1) {
      this.currentPage++;
    }
  }

  prevPage() {
    // Verificamos si hay una página anterior válida
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  } 

}
