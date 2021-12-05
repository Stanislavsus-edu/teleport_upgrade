export default class Score {
  constructor(gameElement) {
    this.gameElement = gameElement;
    this.scoreElement = gameElement.querySelector('.score');
    this.missElement = gameElement.querySelector('.miss');
  }

  init() {
    this.score = 0;
    this.miss = 0;

    this.gameElement.addEventListener('click', (event) => {
      const col = event.target.closest('.col');
      if (col) {
        const goblin = col.querySelector('.goblin');
        if (goblin) {
          this.hit();
          goblin.remove();
        }
      }
    });
  }

  hit() {
    this.score += 1;
    this.scoreElement.innerText = this.score;
  }

  missed() {
    this.miss += 1;
    this.missElement.innerText = this.miss;
  }
}
