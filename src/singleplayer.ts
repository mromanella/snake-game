import { Snake } from "./snake/snake";
import FoodSpawner from './food/foodSpawner';

import './index.css';
import { Animator } from "./animator/src/models";
import { CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './settings';
import {
    collidedWithWall, collidedWithBody, setCanvasBorder, goThroughWall
} from "./utils";
import { Player } from "./player";
import { getPlayer1Keys } from "./controls";
import { getKeyboardController } from "./animator/src/keyboard/index";
import { Game } from "./game";

const playerUpdateLoop = (player: Player, game: Game) => {
    player.snake.update();
    const head = player.snake.getHead();
    // Check for game over conditions
    // Snake head colliding with body
    if (collidedWithBody(head, player.snake)) {
        clearInterval(player.updateInterval);
        player.gameOver();
        game.running = false;
        return;
    }

    // Snake head colliding with wall
    if (collidedWithWall(head)) {
        if (game.options.collideWithWall) {
            clearInterval(player.updateInterval);
            player.gameOver(true);
            game.running = false;
            return;
        }
        // Otherwise 
        goThroughWall(player.snake);
    }

    // Remove eaten foods
    const wasEaten = game.foodSpawner.removeEatenFoods(head);
    if (wasEaten) {
        player.snake.addPart();
        // Increment if some were eaten
        player.updateScore();
        clearInterval(player.updateInterval);
        player.updateInterval = setInterval(playerUpdateLoop, player.gameSpeed, player, game);
    }

    // Spawn more
    game.foodSpawner.spawn(...player.snake.path);
    player.unlockKeys();
}

/**
 * @description Drawing loop
 */
function drawLoop(ctx: CanvasRenderingContext2D, animator: Animator, snake: Snake, foodSpawner: FoodSpawner) {
    foodSpawner.draw(ctx);
    snake.draw(ctx, true);
}

export const start = (options: any): Game => {
    const numFood = options.numFood;
    const snake = new Snake(200, 200);
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, snake, foodSpawner);

    setCanvasBorder(options, animator);

    const playerKeys = getPlayer1Keys();
    const controller = getKeyboardController(playerKeys);

    const player = new Player(1, snake, playerKeys);

    foodSpawner.spawn(...snake.path);
    animator.resume();
    controller.listen();

    const game: Game = {
        player1: player,
        player2: null,
        foodSpawner: foodSpawner,
        controller: controller,
        animator: animator,
        running: true,
        options: options
    }
    player.updateInterval = setInterval(playerUpdateLoop, player.gameSpeed, player, game);
    return game;
}

const cleanUp = () => {

}