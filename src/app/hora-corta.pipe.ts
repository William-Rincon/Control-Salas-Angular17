import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horaCorta',
  standalone: true
})
export class HoraCortaPipe implements PipeTransform {

  transform(horaMilitar: string): string {
    const partes = horaMilitar.split(':');
    let horas = parseInt(partes[0], 10);
    const minutos = partes[1];

    const ampm = horas >= 12 ? 'pm' : 'am';
    horas = horas % 12;
    horas = horas ? horas : 12; // El 0 se convierte en 12 en el formato de hora corta

    return horas + ':' + minutos + ' ' + ampm;
  }

}
