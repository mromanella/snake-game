import FoodSpawner from "./food/foodSpawner";

import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, FPS, GAME_SPEED_LIMIT, PLAYER_DEATH_EVENT, GAME_FINISH_EVENT, PLAYER_MAX_SPEED_EVENT, GAME_SPEEDS, FOOD_PICKUP, GAME_SPEED_DELTA } from "./constants";
import { Snake } from "./snake/snake";
import { setCanvasBorder, initScoreTag, hideScoreTag, updateScoreText, onMaxSpeed, changeSnakeDirection, collidedWithBody, collidedWithWall, goThroughWall } from "./utils";
import { getPlayer1Keys } from "./controls";
import { SnakePart } from "./snake/snake-part";
import { Animator, keyboard, objects, events, sounds, Scene } from "./animator/index";
import Key from "./animator/src/keyboard/key";

const eventController = events.getEventController();
const soundController = sounds.getSoundController();

interface Options {
    numFood: number,
    collideWithWall: boolean,
    displayGrid: boolean,
    startingSpeed: number
}

class Game extends Scene {

    snake: Snake;
    score: number = 0;
    keyPresses: Key[] = [];
    foodSpawner: FoodSpawner;
    options: Options;
    running: boolean = false;
    playerMode: string;
    grid: objects.shapes.Rectangle[] = [];
    keys = getPlayer1Keys();

    constructor(playerMode: string, options: Options) {
        super(new Animator(CANVAS_ID, FPS), GAME_SPEED_LIMIT - 10);
        this.playerMode = playerMode;
        this.options = options;
        this.foodSpawner = new FoodSpawner(this.anim.ctx, options.numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.populateGrid();
        this.setupSingleplayer();

    }

    populateGrid() {
        for (let x = 0; x < CANVAS_WIDTH; x += SnakePart.partWidth) {
            for (let y = 0; y < CANVAS_HEIGHT; y += SnakePart.partWidth) {
                let g = new objects.shapes.Rectangle(this.anim.ctx, x, y, null, SnakePart.partWidth, SnakePart.partWidth, '#f0f0f0');
                g.fill = false;
                this.grid.push(g);
            }
        }
    }

    gameOver(useLastPath: boolean = false) {
        this.running = false;
        if (useLastPath) {
            this.snake.path = this.snake.lastPath;
        }
        for (let snakePart of this.snake.path) {
            snakePart.color = 'red';
        }
        this.snake.draw();
        eventController.trigger(PLAYER_DEATH_EVENT);
    }

    updateGameSpeed() {
        if (this.snake.updateSpeed > GAME_SPEED_LIMIT) {
            this.snake.updateSpeed -= GAME_SPEED_DELTA;
            this.snake.setUpdateInterval();
            if (this.snake.updateSpeed === GAME_SPEED_LIMIT) {
                eventController.trigger(PLAYER_MAX_SPEED_EVENT);
            }
        }
    }

    updateScore() {
        this.score += 100;
    }

    update() {
        if (!this.running) {
            return;
        }

        if (this.snake.shouldUpdate) {
            // Getting our next valid keypress and changing direction
            let nextKey = this.spliceNextKeyPress();
            let valid = changeSnakeDirection(this.snake, nextKey);
            while (!valid && nextKey) {
                if (!valid) {
                    nextKey = this.spliceNextKeyPress();
                    valid = changeSnakeDirection(this.snake, nextKey);
                }
            }

            this.snake.move();
            this.snake.shouldUpdate = false;

            const head = this.snake.getHead();
            // Check for game over conditions

            // Snake head colliding with body
            if (collidedWithBody(head, this.snake)) {
                // console.log('body');
                this.gameOver();
                return;
            }

            // Snake head colliding with wall
            if (collidedWithWall(head)) {
                if (this.options.collideWithWall) {
                    // console.log('wall');
                    this.gameOver(true);
                    return;
                }
                // Otherwise
                goThroughWall(this.snake);
            }

            const ate = this.foodSpawner.removeEatenFoods(this.snake.getHead());
            if (ate) {
                this.snake.grow();
                this.updateScore();
                this.updateGameSpeed();
                updateScoreText(this.score);
                eventController.trigger(FOOD_PICKUP);
            }

            if (this.foodSpawner.foods.length === 0) {
                this.foodSpawner.spawn(this.snake.path);
            }
        }
    }

    draw() {
        if (this.options.displayGrid) {
            for (let piece of this.grid) {
                piece.draw();
            }
        }
        this.foodSpawner.draw();
        this.snake.draw();
    }

    initKeys() {
        // Init the keys
        for (let key of this.keys) {
            key.addKeyPress((key: Key) => {
                if (this.running) {
                    const len = this.keyPresses.push(key);

                    if (len > 3) {
                        // Remove from the front
                        const remainder = len - 3;
                        this.keyPresses.splice(0, remainder);
                    }
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

    setupSingleplayer() {
        const gameSpeed = GAME_SPEEDS[this.options.startingSpeed];

        this.initKeys();
        this.snake = new Snake(this.anim.ctx, 200, 200, gameSpeed);
        eventController.register(PLAYER_MAX_SPEED_EVENT, onMaxSpeed, this);
        eventController.register(PLAYER_DEATH_EVENT, () => {
            this.running = false;
            soundController.play(PLAYER_DEATH_EVENT);
            eventController.trigger(GAME_FINISH_EVENT);
        });
        setCanvasBorder(this.options, this.anim);
    }

    start() {
        super.start();
        this.snake.setUpdateInterval();
        initScoreTag();
        this.running = true;
    }

    stop() {
        super.stop();
        this.snake.clearUpdateInterval();
        this.running = false;
        hideScoreTag();
        updateScoreText(0);
    }

    resume() {
        super.resume();
        this.snake.setUpdateInterval();
        this.snake.shouldUpdate = true;
        this.running = true;
    }

    pause() {
        this.running = false;
        this.snake.shouldUpdate = false;
        this.snake.clearUpdateInterval();
        super.pause();
    }

}

export { Game, Options };
