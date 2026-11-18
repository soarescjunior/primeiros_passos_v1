import { Component, input } from '@angular/core';
import { Card } from './cards';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  card = input.required<Card>();

  alterarFavorito() {
    this.card().favorito = !this.card().favorito;
  }

}
