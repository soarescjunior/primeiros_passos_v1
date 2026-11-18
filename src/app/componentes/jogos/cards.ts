export interface Card {
  titulo: string;
  autoria: string;
  favorito: boolean;
  genero: GeneroLiterario | string;
  imagem: string;
}

export interface GeneroLiterario {
  id: string;
  value: string;
  cards: Card[];
}