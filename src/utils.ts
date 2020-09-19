import { Snake } from "./snake/snake";
import { Point, Animator } from "./animator/src/models";
import Key from "./animator/src/keyboard/key";
import { getDirectionForKey, UP, DOWN, LEFT } from "./controls";
import { CANVAS_WIDTH, CANVAS_HEIGHT, GAME_SPEED_LIMIT } from "./constants";
import { SnakePart } from "./snake/snake-part";
import { collision } from "./animator/index";
import { Game } from "./game";

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
    let scoreTag = document.getElementById('player1-score');
    if (num === 2) {
        scoreTag = document.getElementById('player2-score');
    }
    return scoreTag;
}

function initScoreTag(num: number) {
    const scoreTag = getScoreTag(num);
    showElement(scoreTag);
}

function hideScoreTag(num: number) {
    const scoreTag = getScoreTag(num);
    hideElement(scoreTag);
}

function updateScoreText(num: number, score: number) {
    const scoreTag = getScoreTag(num);
    scoreTag.innerText = `Player ${num}: ${score}`;
}

function hideElement(element: HTMLElement) {
    element.classList.add('hidden');
}

function showElement(element: HTMLElement) {
    element.classList.remove('hidden');
}

function slideIn(element: HTMLElement) {
    element.classList.remove('slide-in');
    element.classList.remove('slide-out');
    element.classList.remove('slid-out');
    element.classList.add('slide-in');
    setTimeout(() => {
        element.classList.add('slid-in');
        element.classList.remove('slide-in');
    }, 800);
}

function slideOut(element: HTMLElement) {
    element.classList.remove('slide-out');
    element.classList.remove('slide-in');
    element.classList.remove('slid-in');
    element.classList.add('slide-out');
    setTimeout(() => {
        element.classList.add('slid-out');
        element.classList.remove('slide-out');
    }, 800);
}

function applySlidIn(element: HTMLElement) {
    element.classList.remove('slid-out');
    element.classList.add('slid-in');
}

function applySlidOut(element: HTMLElement) {
    element.classList.remove('slid-in');
    element.classList.add('slid-out');
}

function fadeOut(element: HTMLElement) {
    element.classList.add('fade-out');
}

function showNotification(text: string, time: number = 5000) {
    const notificationEl = document.getElementById('notification');
    notificationEl.innerText = text;
    slideIn(notificationEl);
    setTimeout(() => {
        slideOut(notificationEl);
    }, time);
}

function onMaxSpeed(game: Game) {
    if (game.options.numPlayers === 1) {
        showNotification('Player has hit max speed!');
    } else {
        if (game.player1.speed === GAME_SPEED_LIMIT) {
            showNotification('Player 1 has hit max speed!');
        } else {
            showNotification('Player 2 has hit max speed!');
        }
    }
}

export {
    validDirectionChange, changeSnakeDirection, collidedWithBody, goThroughWall,
    collidedWithWall, updateScoreText,
    setCanvasBorder, initScoreTag, hideScoreTag, hideElement, showElement, slideIn,
    slideOut, fadeOut, showNotification,
    applySlidIn, applySlidOut, onMaxSpeed
}