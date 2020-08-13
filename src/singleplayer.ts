import { Snake } from "./snake/snake";
import FoodManager from './food/foodManager';

import './index.css';
import { Animator, Point } from "./animator/src/models";
import { Key, keyNames } from "./animator/src/keyboard/index";
import { getPlayerKeyboardController } from "./animator/src/keyboard/keyboardController";
import { Food } from "./food/food";
import { collision } from "./animator/index";
import { incrementScore } from './score';

let drawBB = false;

let gameSpeed = 500;
const gameSpeedDelta = 25;
const gameSpeedLimit: number = 75;
let gameRunning = true;

const FPS = 30;
const CANVAS_ID = 'game-window';

type _DIRECTIONS = {
    [key: string]: Point
}

const DIRECTIONS: _DIRECTIONS = {
    [keyNames.W]: new Point(0, -1),
    [keyNames.S]: new Point(0, 1),
    [keyNames.A]: new Point(-1, 0),
    [keyNames.D]: new Point(1, 0)
}

const validateDirectionChange = (key: Key) => {
    // If we currently aren't allowing change return
    if (key.isLocked()) {
        return;
    }

    // Check to make sure that the new direction isn't 180 degrees in the opposite of 
    // our current heading
    // OR
    // Check to make sure that the keypress isn't for the direction we are already going
    // If either than skip
    let dir = DIRECTIONS[key.keyName];
    let sum = dir.add(snake.direction);
    if ((sum.equals(new Point(0, 0))) ||
        (dir.equals(snake.direction))) {
        return;
    }

    // Valid press, disallow until the next update
    for (let key of directionKeys) {
        key.setLocked(true);
    }
    snake.direction = dir.copy();
}

const snakeDirectionKeyPressFuncs = [
    validateDirectionChange
]
const keys = [
    new Key(keyNames.W, snakeDirectionKeyPressFuncs),
    new Key(keyNames.S, snakeDirectionKeyPressFuncs),
    new Key(keyNames.A, snakeDirectionKeyPressFuncs),
    new Key(keyNames.D, snakeDirectionKeyPressFuncs),
    new Key(keyNames.J, [
        () => {
            drawBB = true;
        }
    ], [
        () => {
            drawBB = false;
        }
    ])
]
const kbController = getPlayerKeyboardController(keys);
const directionKeys = [
    kbController.getKey(keyNames.W),
    kbController.getKey(keyNames.S),
    kbController.getKey(keyNames.A),
    kbController.getKey(keyNames.D)
]

let animator: Animator = null;
let snake: Snake = null;
let foodManager: FoodManager = null;
const numFood = 1;
let foods: Food[] = null;
let updateInterval: number = null;

let score = 0;

const clearUpdateInterval = () => {
    clearInterval(updateInterval);
}

const setUpdateInterval = (speed: number) => {
    if (updateInterval) {
        clearUpdateInterval();
    }
    updateInterval = setInterval(updateLoop, speed)
}

const updateLoop = () => {
    snake.update();
    const head = snake.getHead();
    // Check for game over conditions
    // Snake head colliding with wall
    if (head.x < 0 || head.x >= animator.canvasWidth
        || head.y < 0 || head.y >= animator.canvasHeight) {
        clearUpdateInterval();
        snake.path = snake.lastPath;
        snake.getHead().color = 'red';
    }

    // Snake head colliding with body
    for (let snakePart of snake.path.slice(1)) {
        if (collision.checkCollision(head.getBoundingBox(), snakePart.getBoundingBox())) {
            clearUpdateInterval();
            head.color = 'red';
            snakePart.color = 'red';
            break
        }
    }

    // Remove eaten foods
    const numEaten = foodManager.removeEatenFoods(head);
    if (numEaten > 0) {
        snake.addPart();
        // Increment if some were eaten
        for (let i = 0; i < numEaten; i++) {
            score = incrementScore(score, numEaten, 1);
        }
        // Spawn more
        foodManager.spawn(...snake.getBoundingBoxes());
    }


    kbController.unlockAllLockedKeys();
}

/**
 * @description Drawing loop
 */
function drawLoop(ctx: CanvasRenderingContext2D) {
    foodManager.draw(ctx, drawBB);
    snake.draw(ctx, true, drawBB);
}

export const init = () => {
    animator = new Animator(CANVAS_ID, FPS, drawLoop);
    snake = new Snake(200, 200);
    foodManager = new FoodManager(numFood, animator.canvasWidth, animator.canvasHeight);
    foodManager.spawn(...snake.getBoundingBoxes());
    setUpdateInterval(gameSpeed);
}