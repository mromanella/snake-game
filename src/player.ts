import { Snake } from "./snake/snake";
import { Key, unlockKeys, lockKeys } from "./animator/src/keyboard/index";
import { INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT } from "./constants";
import { changeSnakeDirection, collidedWithBody, goThroughWall, collidedWithWall, updateScoreText } from "./utils";
import { Game } from "./game";
import { collision } from "./animator/index";
import { Point } from "./animator/src/models";

export class Player {

    num: number = 1;
    snake: Snake;
    keys: Key[];
    score: number = 0;
    alive: boolean = true;
    speed: number = INITIAL_GAME_SPEED;
    shouldUpdate: boolean = false;

    constructor(num: number, snake: Snake, keys: Key[]) {
        this.num = num;
        this.snake = snake;
        this.keys = keys;
        this.initKeys();
    }

    setUpdateTimeout() {
        if (!this.alive) {
            return;
        }
        setTimeout(() => {
            this.shouldUpdate = true;
        }, this.speed);
    }

    initKeys() {
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

    updateScore() {
        this.score += 100;
    }

    lockKeys() {
        lockKeys(this.keys);
    }

    unlockKeys() {
        unlockKeys(this.keys);
    }

    gameOver(useLastPath: boolean = false) {
        this.alive = false;
        this.shouldUpdate = false;
        if (useLastPath) {
            this.snake.path = this.snake.lastPath;
        }
        for (let snakePart of this.snake.path) {
            snakePart.color = 'red';
        }
    }

    updateGameSpeed() {
        if (this.speed > GAME_SPEED_LIMIT) {
            this.speed -= GAME_SPEED_DELTA;
        }
    }

    grow() {
        this.snake.addPart();
        // for (let i = 0; i < this.snake.path.length; i++) {
        //     let part = this.snake.path[i];
        //     part.color = 'orange';
        //     setTimeout(() => {
        //         part.color = this.snake.color;
        //     }, this.updateSpeed - 5);
        // }
        // Increment if some were eaten
        this.updateScore();
        this.updateGameSpeed();
        updateScoreText(this.num, this.score);
    }

    update(game: Game) {
        if (!this.shouldUpdate) {
            return;
        }
        this.shouldUpdate = false;
        this.snake.update();
        const otherPlayer = this.otherPlayer(game);
        const head = this.snake.getHead();
        // Check for game over conditions

        // Snake head colliding with body
        if (collidedWithBody(head, this.snake)) {
            this.gameOver();
            return;
        }

        // Snake head collide with other snake's head or body
        if (otherPlayer) {
            if (collision.checkCollision(head, otherPlayer.snake.getHead())) {
                // If facing each other
                if (this.snake.direction.diff(otherPlayer.snake.direction).equals(new Point(0, 0))) {
                    // Everyone loses
                    this.gameOver();
                    otherPlayer.gameOver();
                } else {
                    // I lose, I ran into them
                    this.gameOver();
                    return;
                }
            }
            if (collidedWithBody(head, otherPlayer.snake)) {
                this.gameOver();
                return;
            }
        }

        // Snake head colliding with wall
        if (collidedWithWall(head)) {
            if (game.options.collideWithWall) {
                this.gameOver(true);
                return;
            }
            // Otherwise
            goThroughWall(this.snake);
        }

        this.unlockKeys();
        this.setUpdateTimeout();
    }

    otherPlayer(game: Game) {
        if (this.num === 1) {
            return game.player2;
        }
        return game.player1;
    }
}
