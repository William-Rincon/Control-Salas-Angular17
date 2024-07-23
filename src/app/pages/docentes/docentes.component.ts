import { Component, OnInit } from '@angular/core';
import { reportlist } from './docente.Smock';
import { CommonModule, DatePipe } from '@angular/common';
import { Reporte } from './docente.Smock';
import { HoraCortaPipe } from '../../hora-corta.pipe';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-docentes',
  standalone: true,
  imports: [DatePipe, HoraCortaPipe, CommonModule, FormsModule,FooterComponent],
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {
  reportlist: Reporte[] = reportlist;
  searchText = '';
  pageSize = 5;
  currentPage = 0;

  ngOnInit() {
    this.currentPage = 0;
  }

  get filteredReportlist() {
    return this.reportlist.filter(reporte =>
      reporte.t_aula.toLowerCase().includes(this.searchText.toLowerCase()) ||
      reporte.t_software.toLowerCase().includes(this.searchText.toLowerCase()) ||
      reporte.t_facultad.toLowerCase().includes(this.searchText.toLowerCase()) ||
      reporte.n_cantidad.toString().includes(this.searchText) ||
      reporte.d_fecha.toString().includes(this.searchText) ||
      reporte.d_hora.toString().includes(this.searchText) ||
      reporte.d_horaini.toString().includes(this.searchText) ||
      reporte.d_horafin.toString().includes(this.searchText)
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
