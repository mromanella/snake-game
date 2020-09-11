import { Player } from "./player";
import { KeyboardController, getKeyboardController } from "./animator/src/keyboard/index";
import { Animator, Rectangle } from "./animator/src/models";
import FoodSpawner from "./food/foodSpawner";

import { CANVAS_WIDTH, CANVAS_HEIGHT, CANVAS_ID, FPS, GAME_SPEED_LIMIT } from "./constants";
import { Snake } from "./snake/snake";
import { setCanvasBorder, initScoreTag, hideScoreTag, updateScoreText } from "./utils";
import { getPlayer1Keys, getPlayer2Keys } from "./controls";
import { SnakePart } from "./snake/snake-part";

export interface Game {
    player1: Player,
    player2: Player,
    foodSpawner: FoodSpawner,
    controller: KeyboardController,
    animator: Animator,
    options: Options,
    running: boolean,
    interval: number
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

function gameLoop(game: Game) {
    if (!game.running) {
        return;
    }

    const p1 = game.player1;
    const foodSpawner = game.foodSpawner;
    p1.update(game);
    if (!p1.alive) {
        game.running = false;
        clearInterval(game.interval);
    }
    const p1Ate = foodSpawner.removeEatenFoods(p1.snake.getHead());
    if (p1Ate) {
        p1.grow();
    }
    const snakeParts = [...p1.snake.path];
    if (game.options.numPlayers === 2) {
        const p2 = game.player2;
        p2.update(game);
        if (!p2.alive) {
            game.running = false;
            clearInterval(game.interval);
        }
        const p2Ate = foodSpawner.removeEatenFoods(p2.snake.getHead());
        if (p2Ate) {
            p2.grow();
        }
        snakeParts.push(...p2.snake.path);
    }
    if (foodSpawner.foods.length === 0) {
        foodSpawner.spawn(...snakeParts);
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
    return { options, player1, controller, foodSpawner, running: false };
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
        game = { ...setupSingleplayer(options), player2: null, animator: null, interval: null };
        snakes.push(game.player1.snake);
    } else {
        game = { ...setupMultiplayer(options), animator: null, interval: null };
        snakes.push(game.player1.snake, game.player2.snake);
    }

    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, snakes, game.foodSpawner);
    game.animator = animator;
    setCanvasBorder(options, animator);

    return game;
}

export const startGame = (game: Game) => {
    document.getElementById('play-area').classList.remove('hidden');
    if (game.options.numPlayers === 1) {
        game.player1.setUpdateTimeout();
        initScoreTag(1);
    } else {
        game.player1.setUpdateTimeout();
        game.player2.setUpdateTimeout();
    }
    game.animator.resume();
    game.controller.listen();
    game.interval = setInterval(gameLoop, GAME_SPEED_LIMIT, game);
    game.running = true;
}

export const stopGame = (game: Game) => {
    clearInterval(game.interval);
    hideScoreTag(1);
    updateScoreText(1, 0);
    game.animator.stop();
    game.controller.stopListening();
    game.running = false;
    document.getElementById('play-area').classList.add('hidden');
}
