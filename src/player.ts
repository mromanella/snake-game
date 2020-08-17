import { Snake } from "./snake/snake";
import { KeyboardController } from "./animator/src/keyboard/index";
import { INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT } from "./settings";

export class Player {

    num: number = 1;
    snake: Snake;
    controller: KeyboardController;
    score: number = 0;
    scoreTag: HTMLElement;
    alive: boolean = true;
    gameSpeed: number = INITIAL_GAME_SPEED;
    updateInterval: number = null;

    constructor(num: number, snake: Snake) {
        this.num = num;
        this.snake = snake;
        this.initScoreTag();
    }

    initScoreTag = () => {
        if (this.num === 1) {
            this.scoreTag = document.getElementById('player1-score')
        } else {
            this.scoreTag = document.getElementById('player2-score');
        }
        this.scoreTag.classList.remove('hidden');
    }

    hideScoreTag = () => {
        if (this.num === 1) {
            this.scoreTag = document.getElementById('player1-score')
        } else {
            this.scoreTag = document.getElementById('player2-score');
        }
        this.scoreTag.classList.add('hidden');
    }

    updateScore = () => {
        this.score += 100;
        this.scoreTag.innerText = `Player ${this.num}: ${this.score}`;
    }

    gameOver = () => {
        this.alive = false;
        this.snake.path = this.snake.lastPath;
        for (let snakePart of this.snake.path) {
            snakePart.color = 'red';
        }
    }

    updateGameSpeed = () => {
        if (this.gameSpeed > GAME_SPEED_LIMIT) {
            this.gameSpeed -= GAME_SPEED_DELTA;
        }
    }
}