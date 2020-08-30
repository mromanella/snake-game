import { Player } from "./player";
import { KeyboardController, getKeyboardController } from "./animator/src/keyboard/index";
import { Animator, Point, Rectangle } from "./animator/src/models";
import FoodSpawner from "./food/foodSpawner";

import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, FPS } from "./constants";
import { Snake } from "./snake/snake";
import { setCanvasBorder, getScoreTag, initScoreTag, hideScoreTag, updateScoreText } from "./utils";
import { getPlayer1Keys, getPlayer2Keys } from "./controls";
import { SnakePart } from "./snake/snake-part";

export interface Game {
    player1: Player,
    player2: Player,
    foodSpawner: FoodSpawner,
    controller: KeyboardController,
    animator: Animator,
    options: Options,
    running: boolean
}

export interface Options {
    numPlayers: number,
    numFood: number,
    collideWithWall: boolean
}

const gameBoard: Rectangle[] = [];
for (let x = 0; x < CANVAS_WIDTH; x += SnakePart.partWidth) {
    for (let y = 0; y < CANVAS_HEIGHT; y += SnakePart.partWidth) {
        gameBoard.push(new Rectangle(x, y, SnakePart.partWidth, SnakePart.partWidth, '#f7f7f7'));
    }  
}

/**
 * @description Drawing loop
 */
const drawLoop = (ctx: CanvasRenderingContext2D, animator: Animator, snakes: Snake[], foodSpawner: FoodSpawner) => {
    foodSpawner.draw(ctx);
    for (let snake of snakes) {
        snake.draw(ctx, true);
    }
    for (let piece of gameBoard) {
        piece.draw(ctx, false);
    }
}

const setupSingleplayer = (options: Options) => {
    const numFood = options.numFood;
    const player1Keys = getPlayer1Keys();
    const player1Snake = new Snake(200, 200);
    const player1 = new Player(1, player1Snake, player1Keys);
    const controller = getKeyboardController(player1Keys);
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    foodSpawner.spawn(...player1Snake.path);
    return { options, player1, controller, foodSpawner, running: false};
}

const setupMultiplayer = (options: Options) => {
    const numFood = options.numFood;
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const player1Keys = getPlayer1Keys();
    const player2Keys = getPlayer2Keys();
    const controller = getKeyboardController([...player1Keys, ...player2Keys]);
    const player1Snake = new Snake(200, 150);
    const player2Snake = new Snake(200, 250, 'blue');
    const player1 = new Player(1, player1Snake, player1Keys);
    const player2 = new Player(2, player2Snake, player2Keys);
    foodSpawner.spawn(...player1Snake.path, ...player2Snake.path);
    return { options, player1, player2: player2, controller, foodSpawner, running: false };
}

export const createGame = (options: Options): Game => {

    let game: Game = null;
    const snakes: Snake[] = [];

    if (options.numPlayers === 1) {
        game = {...setupSingleplayer(options), player2: null, animator: null};
        snakes.push(game.player1.snake);
    } else {
        game = {...setupMultiplayer(options), animator: null};
        snakes.push(game.player1.snake, game.player2.snake);
    }

    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, snakes, game.foodSpawner);
    game.animator = animator;
    setCanvasBorder(options, animator);

    return game;
}

export const startGame = (game: Game) => {
    document.getElementById('play-area').classList.remove('hidden');
    game.player1.updateInterval = setInterval(game.player1.update, game.player1.updateSpeed, game);
    if (game.options.numPlayers === 1) {
        initScoreTag(1);
    } else {
        game.player2.updateInterval = setInterval(game.player2.update, game.player2.updateSpeed, game);
    }
    game.animator.resume();
    game.controller.listen();
    game.running = true;
}

export const stopGame = (game: Game) => {
    clearInterval(game.player1.updateInterval);
    hideScoreTag(1);
    updateScoreText(1, 0);
    if (game.options.numPlayers === 2) {
        clearInterval(game.player2.updateInterval);
        hideScoreTag(2);
        updateScoreText(2, 0);
    }
    game.animator.stop();
    game.controller.stopListening();
    game.running = false;
    document.getElementById('play-area').classList.add('hidden');
}