import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://img.freepik.com/vector-premium/fondo-pantalla-paisaje-paisaje-minimalista-puesta-sol-montana-full-hd-4k-8k-imagenes-fondo_538866-33.jpg";
  public Titulo:string = "Curso de Angular con Interpolación";
  constructor() { }

  ngOnInit(): void {
  }

}
