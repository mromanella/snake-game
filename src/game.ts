import { Player } from "./player";
import { KeyboardController, getKeyboardController, lockKeys, unlockKeys } from "./animator/src/keyboard/index";
import { Animator, Rectangle } from "./animator/src/models";
import FoodSpawner from "./food/foodSpawner";

import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, FPS, GAME_SPEED_LIMIT, PLAYER_DEATH_EVENT, GAME_FINISH_EVENT, PLAYER_MAX_SPEED_EVENT, GAME_SPEEDS } from "./constants";
import { Snake } from "./snake/snake";
import { setCanvasBorder, initScoreTag, hideScoreTag, updateScoreText, onMaxSpeed } from "./utils";
import { getPlayer1Keys, getPlayer2Keys } from "./controls";
import { SnakePart } from "./snake/snake-part";
import { register, trigger } from "./animator/src/events";


interface Options {
    numFood: number,
    collideWithWall: boolean,
    displayGrid: boolean,
    startingSpeed: number
}

class Game {

    player1: Player;
    player2: Player;
    foodSpawner: FoodSpawner;
    controller: KeyboardController;
    animator: Animator;
    options: Options;
    running: boolean = false;
    interval: number;
    grid: Rectangle[] = [];

    constructor(options: Options) {
        this.options = options;
        this.foodSpawner = new FoodSpawner(options.numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.populateGrid();
        this.loop = this.loop.bind(this);
        this.draw = this.draw.bind(this);
    }

    populateGrid() {
        for (let x = 0; x < CANVAS_WIDTH; x += SnakePart.partWidth) {
            for (let y = 0; y < CANVAS_HEIGHT; y += SnakePart.partWidth) {
                this.grid.push(new Rectangle(x, y, SnakePart.partWidth, SnakePart.partWidth, '#f7f7f7'));
            }
        }
    }

    isMultiplayer() {
        return !(this.player2 === undefined);
    }

    loop() {
        if (!this.running) {
            return;
        }

        this.player1.update(this);
        const p1Ate = this.foodSpawner.removeEatenFoods(this.player1.snake.getHead());
        if (p1Ate) {
            this.player1.grow();
        }
        const snakeParts = [...this.player1.snake.path];
        if (this.isMultiplayer()) {
            this.player2.update(this);
            const p2Ate = this.foodSpawner.removeEatenFoods(this.player2.snake.getHead());
            if (p2Ate) {
                this.player2.grow();
            }
            snakeParts.push(...this.player2.snake.path);
        }
        if (this.foodSpawner.foods.length === 0) {
            this.foodSpawner.spawn(...snakeParts);
        }
    }

    draw(ctx: CanvasRenderingContext2D, animator: Animator) {
        if (this.options.displayGrid) {
            for (let piece of this.grid) {
                piece.draw(ctx, false);
            }
        }
        this.foodSpawner.draw(ctx);
        this.player1.snake.draw(ctx, true);
        if (this.isMultiplayer()) {
            this.player2.snake.draw(ctx, true);
        }
    }

    setupSingleplayer() {
        const gameSpeed = GAME_SPEEDS[this.options.startingSpeed];

        const player1Keys = getPlayer1Keys();
        const player1Snake = new Snake(200, 200);
        this.player1 = new Player(1, gameSpeed, player1Snake, player1Keys);
        this.finishSetup();
    }

    setupMultiplayer() {
        const gameSpeed = GAME_SPEEDS[this.options.startingSpeed];
        const player1Keys = getPlayer1Keys();
        const player2Keys = getPlayer2Keys();
        const player1Snake = new Snake(200, 150);
        const player2Snake = new Snake(200, 250, 'blue');
        this.player1 = new Player(1, gameSpeed, player1Snake, player1Keys);
        this.player2 = new Player(2, gameSpeed, player2Snake, player2Keys);
        this.finishSetup();
    }

    finishSetup() {
        const keys = this.player1.keys;
        if (this.isMultiplayer()) {
            keys.push(...this.player2.keys);
        }
        this.controller = getKeyboardController(keys);

        register(PLAYER_MAX_SPEED_EVENT, onMaxSpeed, this);
        register(PLAYER_DEATH_EVENT, () => {
            this.running = false;
            trigger(GAME_FINISH_EVENT);
        });
        this.animator = new Animator(CANVAS_ID, FPS, this.draw, true);
        setCanvasBorder(this.options, this.animator);
    }

    start() {
        if (!this.isMultiplayer()) {
            this.player1.setUpdateTimeout();
            initScoreTag(1);
        } else {
            this.player1.setUpdateTimeout();
            this.player2.setUpdateTimeout();
        }
        this.animator.resume();
        this.controller.listen();
        this.interval = setInterval(this.loop, GAME_SPEED_LIMIT - 10);
        this.running = true;
    }

    stop() {
        this.running = false;
        clearInterval(this.interval);
        hideScoreTag(1);
        updateScoreText(1, 0);
        this.animator.stop();
        this.controller.stopListening();
    }

    resume() {
        this.animator.resume();
        if (!this.isMultiplayer()) {
            this.player1.shouldUpdate = true;
            unlockKeys(this.player1.keys);
        }
        else {
            unlockKeys(this.player1.keys);
            unlockKeys(this.player2.keys);
            this.player1.shouldUpdate = true;
            this.player2.shouldUpdate = true;
        }
        this.running = true;
    }

    pause() {
        this.running = false;
        this.animator.pause();
        if (!this.isMultiplayer()) {
            lockKeys(this.player1.keys);
            this.player1.shouldUpdate = false;
        } else {
            lockKeys(this.player1.keys);
            lockKeys(this.player2.keys);
            this.player1.shouldUpdate = false;
            this.player2.shouldUpdate = false;
        }
    }
}

export { Game, Options };