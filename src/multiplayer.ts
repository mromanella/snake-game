import { Snake } from "./snake/snake";
import FoodSpawner from './food/foodSpawner';

import './index.css';
import { Animator } from "./animator/src/models";
import { CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, FPS } from './settings';
import {
    collidedWithWall, collidedWithBody, setCanvasBorder, goThroughWall
} from "./utils";
import { Player } from "./player";
import { getPlayer1Keys, getPlayer2Keys } from "./controls";
import { getKeyboardController } from "./animator/src/keyboard/index";
import { collision } from "./animator/index";
import { Game } from "./game";

const playerUpdateLoop = (player: Player, otherPlayer: Player, game: Game) => {
    player.snake.update();
    const head = player.snake.getHead();
    // Check for game over conditions

    // Snake head colliding with body
    if (collidedWithBody(head, player.snake)) {
        clearInterval(player.updateInterval);
        clearInterval(otherPlayer.updateInterval);
        player.gameOver();
        game.running = false;
        return;
    }

    // Snake head collide with other snake's head or body
    if (collision.checkCollision(head, otherPlayer.snake.getHead())) {
        // Everyone loses
        clearInterval(player.updateInterval);
        clearInterval(otherPlayer.updateInterval);
        player.gameOver();
        otherPlayer.gameOver();
        game.running = false;
    }
    if (collidedWithBody(head, otherPlayer.snake)) {
            clearInterval(player.updateInterval);
            clearInterval(otherPlayer.updateInterval);
            player.gameOver();
            game.running = false;
            return;
        }

    // Snake head colliding with wall
    if (collidedWithWall(head)) {
        if (game.options.collideWithWall) {
            clearInterval(player.updateInterval);
            clearInterval(otherPlayer.updateInterval);
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
        player.updateInterval = setInterval(playerUpdateLoop, player.gameSpeed, player, otherPlayer, game);
    }

    // Spawn more
    game.foodSpawner.spawn(...player.snake.path, ...otherPlayer.snake.path);
    player.unlockKeys();
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

export const start = (options: any): Game => {
    const numFood = options.numFood;
    const player1Snake = new Snake(200, 150);
    const player2Snake = new Snake(200, 250, 'blue');
    const foodSpawner = new FoodSpawner(numFood, CANVAS_WIDTH, CANVAS_HEIGHT);
    const animator = new Animator(CANVAS_ID, FPS, drawLoop, true, player1Snake, player2Snake, foodSpawner);

    setCanvasBorder(options, animator);

    const player1Keys = getPlayer1Keys();
    const player2Keys = getPlayer2Keys();
    const controller = getKeyboardController([...player1Keys, ...player2Keys]);

    const player1 = new Player(1, player1Snake, player1Keys);
    const player2 = new Player(2, player2Snake, player2Keys);

    foodSpawner.spawn(...player1Snake.path, ...player2Snake.path);
    animator.resume();
    controller.listen();
    const game: Game = {
        player1: player1,
        player2: player2,
        foodSpawner: foodSpawner,
        controller: controller,
        animator: animator,
        running: true,
        options: options
    }
    player1.updateInterval = setInterval(playerUpdateLoop, player1.gameSpeed, player1, player2, game);
    player2.updateInterval = setInterval(playerUpdateLoop, player2.gameSpeed, player2, player1, game);
    return game;
}

const cleanUp = () => {

}