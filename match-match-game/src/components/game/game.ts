import { PlayingField } from '../playingField/playingField';

export class Game {
  constructor(private playingField: PlayingField) {
  }

  startGame(complexity: number) {
    this.playingField.clear();
    this.playingField.complete(complexity);
  }

  /* private async cardTurn(card: Card) {
  await card.getFront
} */
}
