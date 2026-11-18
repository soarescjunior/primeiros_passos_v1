import { Component, OnInit } from '@angular/core';
import { Card, GeneroLiterario } from '../jogos/cards';
import { mockCards } from '../../mock-cards';
import { TipoDeProdutoComponent } from '../tipos-de-produtos/tipos-de-produtos.component';

@Component({
  selector: 'app-lista-cards',
  imports: [TipoDeProdutoComponent],
  templateUrl: './lista-cards.component.html',
  styleUrl: './lista-cards.component.css'
})
export class ListaCardsComponent implements OnInit {
generos: GeneroLiterario[] = [];
CardsPorGenero: Map<string, Card[]> = new Map();

ngOnInit() {
  this.CardsPorGenero = new Map();

  mockCards.forEach((card) => {
    const generoId = typeof card.genero === 'string' ? card.genero : card.genero.id;
    if (!this.CardsPorGenero.has(generoId)) {
      this.CardsPorGenero.set(generoId, []);
    }
    this.CardsPorGenero.get(generoId)?.push(card); 
  });

  this.generos = [
    {
      id: 'anel',
      value: 'Anéis',
      cards: this.CardsPorGenero.get("anel") ?? []
    },
    {
      id: 'pulseira',
      value: 'Pulseira',
      cards: this.CardsPorGenero.get("pulseira") ?? []
    },
    {
      id: 'colar',
      value: 'Colar',
      cards: this.CardsPorGenero.get("colar") ?? []
    },
    {
      id: 'brinco',
      value: 'Brinco',
      cards: this.CardsPorGenero.get("brinco") ?? []
    },
  ];
  console.log(this.CardsPorGenero);
}
}
