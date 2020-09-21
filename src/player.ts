import { Snake } from "./snake/snake";
import { Key, unlockKeys, lockKeys } from "./animator/src/keyboard/index";
import { INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT, PLAYER_MAX_SPEED_EVENT, PLAYER_DEATH_EVENT } from "./constants";
import {
    changeSnakeDirection, collidedWithBody,
    goThroughWall, collidedWithWall,
    updateScoreText
} from "./utils";
import { Game } from "./game";
import { collision, events } from "./animator/index";
import { Point } from "./animator/src/models";

export class Player {

    num: number = 1;
    snake: Snake;
    keys: Key[];
    keyPresses: Key[] = [];
    score: number = 0;
    alive: boolean = true;
    speed: number;
    shouldUpdate: boolean = false;

    constructor(num: number, startingSpeed: number, snake: Snake, keys: Key[]) {
        this.num = num;
        this.speed = startingSpeed;
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
                const len = this.keyPresses.push(key);
                if (len > 3) {
                    // Remove from the front
                    const remainder = len - 3;
                    this.keyPresses.splice(0, remainder);
                }
            })
        }
    }

    spliceNextKeyPress() {
        if (this.keyPresses.length > 0) {
            const removed = this.keyPresses.splice(0, 1);
            if (removed.length > 0) {
                return removed[0];
            }
        }
        return null;
    }

    updateScore() {
        this.score += 100;
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
        events.trigger(PLAYER_DEATH_EVENT);
    }

    updateGameSpeed() {
        if (this.speed > GAME_SPEED_LIMIT) {
            this.speed -= GAME_SPEED_DELTA;
            if (this.speed === GAME_SPEED_LIMIT) {
                events.trigger(PLAYER_MAX_SPEED_EVENT);
            }
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

        // Getting our next valid keypress and changing direction
        let nextKey = this.spliceNextKeyPress();
        let valid = changeSnakeDirection(this.snake, nextKey);
        while (!valid && nextKey) {
            if (!valid) {
                nextKey = this.spliceNextKeyPress();
                valid = changeSnakeDirection(this.snake, nextKey);
            }
        }

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
        this.setUpdateTimeout();
    }

    otherPlayer(game: Game) {
        if (this.num === 1) {
            return game.player2;
        }
        return game.player1;
    }
}
