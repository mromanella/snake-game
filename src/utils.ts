import { Snake } from "./snake/snake";
import { getDirectionForKey, UP, DOWN, LEFT } from "./controls";
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_SPEED_LIMIT } from "./constants";
import { SnakePart } from "./snake/snake-part";
import { Game, Options } from "./game";
import { objects, keyboard, collision, Animator, elements } from "./animator/index";

function validDirectionChange(snake: Snake, newDirection: objects.Point): boolean {
    // Check to make sure that the new direction isn't 180 degrees in the opposite of
    // our current heading
    // OR
    // Check to make sure that the keypress isn't for the direction we are already going
    // If either than skip
    let sum = newDirection.add(snake.direction);
    if ((sum.equals(new objects.Point(0, 0))) ||
        (newDirection.equals(snake.direction))) {
        return false;
    }
    return true;
}

function changeSnakeDirection(snake: Snake, key: keyboard.Key): boolean {
    if (!key) {
        return false;
    }
    let wasValid = false;
    const direction = getDirectionForKey(key);
    if (validDirectionChange(snake, direction)) {
        snake.direction = direction.copy();
        wasValid = true;
    }
    return wasValid;
}

function collidedWithWall(head: SnakePart): boolean {
    if (head.location.x < 0 || head.location.x >= CANVAS_WIDTH
        || head.location.y < 0 || head.location.y >= CANVAS_HEIGHT) {
        return true;
    }
    return false;
}

function collidedWithBody(head: SnakePart, snake: Snake): boolean {
    for (let snakePart of snake.path.slice(1)) {
        if (collision.checkCollision(head, snakePart)) {
            return true;
        }
    }
    return false;
}

function setCollideWithWallBorder(animator: Animator) {
    animator.canvasEl.classList.remove('dashed');
}

function setPassThroughWallBorder(animator: Animator) {
    animator.canvasEl.classList.add('dashed');
}

function setCanvasBorder(options: any, animator: Animator) {
    if (options.collideWithWall) {
        setCollideWithWallBorder(animator);
    } else {
        setPassThroughWallBorder(animator);
    }
}

function goThroughWall(snake: Snake) {
    if (snake.direction.equals(UP)) {
        snake.getHead().location.y = CANVAS_HEIGHT - SnakePart.partWidth;
    } else if (snake.direction.equals(DOWN)) {
        snake.getHead().location.y = 0;
    } else if (snake.direction.equals(LEFT)) {
        snake.getHead().location.x = CANVAS_WIDTH - SnakePart.partWidth;
    } else {
        // RIGHT
        snake.getHead().location.x = 0;
    }
}

function getScoreTag() {
    let scoreTag = document.getElementById('player-score');
    return scoreTag;
}

function initScoreTag() {
    const scoreTag = getScoreTag();
    elements.showElement(scoreTag);
}

function hideScoreTag() {
    const scoreTag = getScoreTag();
    elements.hideElement(scoreTag);
}

function updateScoreText(score: number) {
    const scoreTag = getScoreTag();
    scoreTag.innerText = `Score: ${score}`;
}

function getTopScoreTag() {
    const scoreTag = document.querySelector('#top-score-value');
    return scoreTag;
}

function showNotification(text: string, time: number = 5000) {
    const notificationEl = document.getElementById('notification');
    notificationEl.innerText = text;
    elements.slideInTop(notificationEl);
    setTimeout(() => {
        elements.slideOutTop(notificationEl);
    }, time);
}

function onMaxSpeed() {
    showNotification('Player has hit max speed!');
}

function setTopScoreText(score: number) {
    const topScoreValueEl: HTMLElement = document.querySelector('#top-score-value');
    topScoreValueEl.textContent = `${score}`;
}

function setOptions(options: Options) {
    const startingSpeedEl: HTMLSelectElement = document.querySelector('#startingSpeed');
    const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
    const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
    const displayGridEl: HTMLSelectElement = document.querySelector('#displayGrid');
    startingSpeedEl.value = `${options.startingSpeed}`;
    numFoodEl.value = `${options.numFood}`;
    collideWithWallEl.value = `${options.collideWithWall}`;
    displayGridEl.value = `${options.displayGrid}`;
}

export {
    validDirectionChange, changeSnakeDirection, collidedWithBody, goThroughWall,
    collidedWithWall, updateScoreText, getTopScoreTag,
    setCanvasBorder, initScoreTag, hideScoreTag, showNotification,
    onMaxSpeed, setTopScoreText, setOptions
}
