import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  promedio: number = 0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      this.promedio = this.getPromedio(series);
    });
  }

  getPromedio(series: Serie[]): number {
    let promedioCal: number = 0;
    let suma: number = 0;
    series.forEach((serie) => suma = suma + serie.seasons);
    promedioCal = suma / series.length;
    return promedioCal;
  }

  ngOnInit() {
    this.getSeries();
  }

}
