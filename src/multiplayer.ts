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
import { unlockKeys, Key, getKeyboardController } from "./animator/src/keyboard/index";

const gameLoop = (player: Player, otherPlayer: Player, playerKeys: Key[], foodSpawner: FoodSpawner, options: any) => {
    player.snake.update();
    const head = player.snake.getHead();
    // Check for game over conditions

    // Snake head colliding with body
    if (collidedWithBody(head, player.snake)) {
        clearInterval(player.updateInterval);
        clearInterval(otherPlayer.updateInterval);
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
        player.updateInterval = setInterval(gameLoop, player.gameSpeed, player, otherPlayer, playerKeys, foodSpawner, options);
    }

    // Spawn more
    foodSpawner.spawn(...player.snake.path, ...otherPlayer.snake.path);
    unlockKeys(playerKeys);
}

/**
 * @description Drawing loop
 */
function drawLoop(ctx: CanvasRenderingContext2D, animator: Animator, player1Snake: Snake,
    player2Snake: Snake, foodSpawner: FoodSpawner) {
    foodSpawner.draw(ctx);
    player1Snake.draw(ctx, true);
    player2Snake.draw(ctx, true);
}

export const start = (options: any) => {
    const numFood = options.numFood;
    const player1Snake = new Snake(200, 150);
    const player2Snake = new Snake(200, 250, 'blue');
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, player1Snake, player2Snake, foodSpawner);

    setCanvasBorder(options, animator);

    const player1Keys = setupPlayerControls(1, player1Snake);
    const player2Keys = setupPlayerControls(2, player2Snake);
    const controller = getKeyboardController([...player1Keys, ...player2Keys]);

    const player1 = new Player(1, player1Snake);
    const player2 = new Player(2, player2Snake);

    foodSpawner.spawn(...player1Snake.path, ...player2Snake.path);
    animator.resume();
    controller.listen();
    player1.updateInterval = setInterval(gameLoop, player1.gameSpeed, player1, player2, player1Keys, foodSpawner, options);
    player2.updateInterval = setInterval(gameLoop, player2.gameSpeed, player2, player1, player2Keys, foodSpawner, options);
}

const cleanUp = () => {

}