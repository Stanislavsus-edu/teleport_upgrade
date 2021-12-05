import Score from './score';

export default class Goblin {
  constructor(gameElement) {
    this.cells = gameElement.querySelectorAll('.col');
    this.goblin = gameElement.querySelector('.goblin');
    this.game = new Score(gameElement);
  }

  init() {
    this.goblin.remove();
    this.game.init();
    this.change();
  }

  change() {
    let previous = 0;
    let rand = 0;

    const gameInterval = setInterval(() => {
      while (rand === previous) {
        rand = Math.floor(Math.random() * (this.cells.length - 1));
      }

      if (this.cells[previous].querySelector('.goblin')) {
        this.game.missed();
        if (this.game.miss === 5) {
          clearInterval(gameInterval);
          alert('You lose!');
          this.init();
        }
      }

      previous = rand;
      this.cells[rand].appendChild(this.goblin);
    }, 1000);
  }
}
