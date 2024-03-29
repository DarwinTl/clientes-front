import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html'
})
export class DirectivasComponent implements OnInit {

  constructor() { }

  titulo: string = "Hola";
  edad: number = 25;

  ngOnInit(): void {
  }

}
