import { Snake } from "./snake/snake";
import FoodSpawner from './food/foodSpawner';

import './index.css';
import { Animator } from "./animator/src/models";
import { CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './settings';
import {
    collidedWithWall, collidedWithBody, setCanvasBorder, goThroughWall
} from "./utils";
import { Player } from "./player";
import { setupPlayerControls } from "./controls";
import { Key, unlockKeys, getKeyboardController } from "./animator/src/keyboard/index";

const gameLoop = (player: Player, playerKeys: Key[], foodSpawner: FoodSpawner, options: any) => {
    player.snake.update();
    const head = player.snake.getHead();
    // Check for game over conditions
    // Snake head colliding with body
    if (collidedWithBody(head, player.snake)) {
        clearInterval(player.updateInterval);
        player.gameOver();
        return;
    }

    // Snake head colliding with wall
    if (collidedWithWall(head)) {
        if (options.collideWithWall) {
            clearInterval(player.updateInterval);
            player.gameOver();
            return;
        }
        // Otherwise 
        goThroughWall(player.snake);
    }

    // Remove eaten foods
    const wasEaten = foodSpawner.removeEatenFoods(head);
    if (wasEaten) {
        player.snake.addPart();
        // Increment if some were eaten
        player.updateScore();
        clearInterval(player.updateInterval);
        player.updateInterval = setInterval(gameLoop, player.gameSpeed, player, playerKeys, foodSpawner, options);
    }

    // Spawn more
    foodSpawner.spawn(...player.snake.path);
    unlockKeys(playerKeys);
}

/**
 * @description Drawing loop
 */
function drawLoop(ctx: CanvasRenderingContext2D, animator: Animator, snake: Snake, foodSpawner: FoodSpawner) {
    foodSpawner.draw(ctx);
    snake.draw(ctx, true);
}

export const start = (options: any) => {
    const numFood = options.numFood;
    const snake = new Snake(200, 200);
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, snake, foodSpawner);

    setCanvasBorder(options, animator);

    const playerKeys = setupPlayerControls(1, snake);
    const controller = getKeyboardController(playerKeys);

    const player = new Player(1, snake);

    foodSpawner.spawn(...snake.path);
    animator.resume();
    controller.listen();
    player.updateInterval = setInterval(gameLoop, player.gameSpeed, player, playerKeys, foodSpawner, options);
}

const cleanUp = () => {

}