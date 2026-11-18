import { Component, input } from '@angular/core';
import { CardComponent } from '../jogos/card.component';
import { mockCards } from '../../mock-cards';
import { GeneroLiterario } from '../jogos/cards';

@Component({
  selector: 'app-tipo-de-produto',
  imports: [CardComponent],
  templateUrl: './tipos-de-produtos.component.html',
  styleUrl: './tipos-de-produtos.component.css'
})
export class TipoDeProdutoComponent {
  genero = input.required<GeneroLiterario>();
}
