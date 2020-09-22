import { Snake } from "./snake/snake";
import { Point, Animator } from "./animator/src/models";
import Key from "./animator/src/keyboard/key";
import { getDirectionForKey, UP, DOWN, LEFT } from "./controls";
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_SPEED_LIMIT } from "./constants";
import { SnakePart } from "./snake/snake-part";
import { collision } from "./animator/index";
import { elements } from "./animator/index";
import { Game, Options } from "./game";

function validDirectionChange(snake: Snake, newDirection: Point): boolean {
    // Check to make sure that the new direction isn't 180 degrees in the opposite of 
    // our current heading
    // OR
    // Check to make sure that the keypress isn't for the direction we are already going
    // If either than skip
    let sum = newDirection.add(snake.direction);
    if ((sum.equals(new Point(0, 0))) ||
        (newDirection.equals(snake.direction))) {
        return false;
    }
    return true;
}

function changeSnakeDirection(snake: Snake, key: Key): boolean {
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
    if (head.x < 0 || head.x >= CANVAS_WIDTH
        || head.y < 0 || head.y >= CANVAS_HEIGHT) {
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
        snake.getHead().y = CANVAS_HEIGHT - SnakePart.partWidth;
    } else if (snake.direction.equals(DOWN)) {
        snake.getHead().y = 0;
    } else if (snake.direction.equals(LEFT)) {
        snake.getHead().x = CANVAS_WIDTH - SnakePart.partWidth;
    } else {
        // RIGHT
        snake.getHead().x = 0;
    }
}

function getScoreTag(num: number) {
    let scoreTag = document.getElementById('player-score');
    return scoreTag;
}

function initScoreTag(num: number) {
    const scoreTag = getScoreTag(num);
    elements.showElement(scoreTag);
}

function hideScoreTag(num: number) {
    const scoreTag = getScoreTag(num);
    elements.hideElement(scoreTag);
}

function updateScoreText(num: number, score: number) {
    const scoreTag = getScoreTag(num);
    scoreTag.innerText = `Score: ${score}`;
}

function showNotification(text: string, time: number = 5000) {
    const notificationEl = document.getElementById('notification');
    notificationEl.innerText = text;
    elements.slideInTop(notificationEl);
    setTimeout(() => {
        elements.slideOutTop(notificationEl);
    }, time);
}

function onMaxSpeed(game: Game) {
    if (!game.player2) {
        showNotification('Player has hit max speed!');
    } else {
        if (game.player1.speed === GAME_SPEED_LIMIT) {
            showNotification('Player 1 has hit max speed!');
        } else {
            showNotification('Player 2 has hit max speed!');
        }
    }
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
    collidedWithWall, updateScoreText,
    setCanvasBorder, initScoreTag, hideScoreTag, showNotification,
    onMaxSpeed, setTopScoreText, setOptions
}