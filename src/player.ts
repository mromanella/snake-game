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
    updateSpeed: number = INITIAL_GAME_SPEED;
    updateInterval: number = null;

    constructor(num: number, snake: Snake, keys: Key[]) {
        this.num = num;
        this.snake = snake;
        this.keys = keys;
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

    updateScore = () => {
        this.score += 100;
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
        if (this.updateSpeed > GAME_SPEED_LIMIT) {
            this.updateSpeed -= GAME_SPEED_DELTA;
        }
    }

    update = (game: Game) => {
        this.snake.update();
        const otherPlayer = this.otherPlayer(game);
        const head = this.snake.getHead();
        // Check for game over conditions

        // Snake head colliding with body
        if (collidedWithBody(head, this.snake)) {
            clearInterval(this.updateInterval);
            if (otherPlayer) {
                clearInterval(otherPlayer.updateInterval);
            }

            this.gameOver();
            game.running = false;
            return;
        }

        // Snake head collide with other snake's head or body
        if (otherPlayer) {
            if (collision.checkCollision(head, otherPlayer.snake.getHead())) {
                // If facing each other
                if (this.snake.direction.diff(otherPlayer.snake.direction).equals(new Point(0, 0))) {
                    // Everyone loses
                    clearInterval(this.updateInterval);
                    clearInterval(otherPlayer.updateInterval);
                    this.gameOver();
                    otherPlayer.gameOver();
                    game.running = false;
                } else {
                    // I lose, I ran into them
                    clearInterval(this.updateInterval);
                    clearInterval(otherPlayer.updateInterval);
                    this.gameOver();
                    game.running = false;
                    return;
                }
            }
            if (collidedWithBody(head, otherPlayer.snake)) {
                clearInterval(this.updateInterval);
                clearInterval(otherPlayer.updateInterval);
                this.gameOver();
                game.running = false;
                return;
            }
        }

        // Snake head colliding with wall
        if (collidedWithWall(head)) {
            if (game.options.collideWithWall) {
                clearInterval(this.updateInterval);
                if (otherPlayer) {
                    clearInterval(otherPlayer.updateInterval);
                }
                this.gameOver(true);
                game.running = false;
                return;
            }
            // Otherwise 
            goThroughWall(this.snake);
        }

        // Remove eaten foods
        const wasEaten = game.foodSpawner.removeEatenFoods(head);
        if (wasEaten) {
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
            clearInterval(this.updateInterval);
            this.updateInterval = setInterval(this.update, this.updateSpeed, game);
        }

        if (game.foodSpawner.foods.length === 0) {
            // Spawn more
            const ignore = [...this.snake.path];
            if (otherPlayer) {
                ignore.push(...otherPlayer.snake.path);
            }
            game.foodSpawner.spawn(...ignore);
        }
        this.unlockKeys();
    }

    otherPlayer = (game: Game) => {
        if (this.num === 1) {
            return game.player2;
        }
        return game.player1;
    }
}