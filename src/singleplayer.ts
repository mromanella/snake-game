import { Snake } from "./snake/snake";
import FoodSpawner from './food/foodSpawner';

import './index.css';
import { Animator } from "./animator/src/models";
import { INITIAL_GAME_SPEED, CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, FPS, GAME_SPEED_DELTA } from './settings';
import {
    collidedWithWall, collidedWithBody
} from "./utils";
import { Player } from "./player";

let numFood = 1;
let updateInterval: number = null;
let gameSpeed = INITIAL_GAME_SPEED;

const singlePlayer = (player: Player, foodSpawner: FoodSpawner) => {
    player.snake.update();

    const head = player.snake.getHead();
    // Check for game over conditions
    // Snake head colliding with wall
    // Snake head colliding with body
    if (collidedWithWall(head) || collidedWithBody(head, player.snake)) {
        player.gameOver();
        return;
    }

    // Remove eaten foods
    const wasEaten = foodSpawner.removeEatenFoods(head);
    if (wasEaten) {
        player.snake.addPart();
        // Increment if some were eaten
        player.updateScore();
    }

    // Spawn more
    foodSpawner.spawn(...player.snake.path);
    player.controller.unlockAllLockedKeys();
}

/**
 * @description Drawing loop
 */
function drawLoop(ctx: CanvasRenderingContext2D, animator: Animator, snake: Snake, foodSpawner: FoodSpawner) {
    foodSpawner.draw(ctx);
    snake.draw(ctx, true);
}

export const start = () => {
    const snake = new Snake(200, 200);
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, snake, foodSpawner);

    const player = new Player(1, snake);

    foodSpawner.spawn(...snake.path);
    animator.resume();
    player.controller.listen();
    updateInterval = setInterval(singlePlayer, gameSpeed, player, foodSpawner);
}