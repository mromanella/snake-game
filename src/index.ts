import { Snake } from "./snake";
import { SnakePart } from "./snake-part";

const canvasEl: any = document.getElementById('game-window');
const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
const scoreTag = document.getElementById('score');
const center = canvasEl.height;
const width = canvasEl.width;
const height = canvasEl.height;
const dim = { x: width, y: height };
const fps = 1000 / 30;
const gameSpeed = 200;
let gameInterval: number = null;
let gameRunning = true;
let lastKeyPressed = 39;
let lastDraw: number = null;
let snake = new Snake(ctx, dim);
let food = randomizeFood();
let score = 0;

window.onload = () => {
    // interval of the snakes movement
    gameInterval = setInterval((e: Event) => {
        // check to see if the last key pressed was a valid key press
        // ie. Not backwards
        if (gameRunning) {
            validateDirectionChange();
            snake.update();

            if (hasEatenFood()) {
                score++;
                scoreTag.innerHTML = String(score);
                food = randomizeFood();
                snake.addNewPart();
            }

            // check if collision, collision takes place if x and y of 
            // head === any other parts x and y    
            checkForCollision();
        } else {
            clearInterval(gameInterval);
            gameRunning = false;
        }

    }, gameSpeed)

    // set up keyboard listeners
    window.addEventListener('keydown', (e: KeyboardEvent) => {
        e.stopPropagation();
        let key = e.keyCode;
        if (key === 40 ||
            key === 38 ||
            key === 39 ||
            key === 37) {
            lastKeyPressed = key;
        }
    });

    // start
    requestAnimationFrame(animation);
}

function validateDirectionChange() {
    if (lastKeyPressed === 40) {
        if (snake.direction !== 'up') {
            snake.direction = 'down';
        }
    } else if (lastKeyPressed === 38) {
        if (snake.direction !== 'down') {
            snake.direction = 'up';
        }
    } else if (lastKeyPressed === 39) {
        if (snake.direction !== 'left') {
            snake.direction = 'right';
        }
    } else if (lastKeyPressed === 37) {
        if (snake.direction !== 'right') {
            snake.direction = 'left';
        }
    }
}

function randomizeFood() {
    let food: any = {};
    let newFoodX = Math.floor(Math.random() * width);
    let newFoodY = Math.floor(Math.random() * height);
    food.x = newFoodX - (newFoodX % 10) + 5;
    food.y = newFoodY - (newFoodY % 10) + 5;
    return food;
}

function checkForCollision() {
    let headX = snake.body[0].x;
    let headY = snake.body[0].y;
    snake.body.slice(1).map((snakePart, index, snakeParts) => {
        if (index > 2 && snakePart.x === headX && snakePart.y === headY) {
            // collision detected
            gameRunning = false;
            snakePart.color = 'red';
            snakePart.draw();
        }
    });
}

function hasEatenFood(): boolean {
    let head = snake.body[0];
    if ((food.x >= head.x && food.x <= head.x + SnakePart.partWidth)
        && (food.y >= head.y && food.y <= head.y + SnakePart.partWidth)) {
        return true;
    }
    return false;
}

function drawFood() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(food.x, food.y, 4, 0, 2 * Math.PI, false);
    ctx.fill();
}

function animation(runningTime: number) {
    if (!lastDraw) lastDraw = runningTime;
    let diff = runningTime - lastDraw;

    if (gameRunning) {
        if (diff / fps > 1) {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            drawFood();
            snake.draw();
            lastDraw = runningTime;
        }
        requestAnimationFrame(animation);
    }
}