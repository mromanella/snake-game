import { Snake } from "./snake/snake";
import { KeyboardController, Key, unlockKeys, lockKeys } from "./animator/src/keyboard/index";
import { INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT } from "./settings";
import { changeSnakeDirection } from "./utils";

export class Player {

    num: number = 1;
    snake: Snake;
    keys: Key[];
    controller: KeyboardController;
    score: number = 0;
    scoreTag: HTMLElement;
    alive: boolean = true;
    gameSpeed: number = INITIAL_GAME_SPEED;
    updateInterval: number = null;

    constructor(num: number, snake: Snake, keys: Key[]) {
        this.num = num;
        this.snake = snake;
        this.keys = keys;
        this.initScoreTag();
        this.initKeys();
    }

    initKeys = () => {
        // Init the keys
        for (let key of this.keys) {
            key.addKeyPress((key: Key) => {
                const valid = changeSnakeDirection(this.snake, key);
                if (valid) {
                   this.lockKeys();
                }
            })
        }
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

    lockKeys = () => {
        lockKeys(this.keys);
    }

    unlockKeys = () => {
        unlockKeys(this.keys);
    }

    gameOver = (useLastPath: boolean = false) => {
        this.alive = false;
        if (useLastPath) {
            this.snake.path = this.snake.lastPath;
        }
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