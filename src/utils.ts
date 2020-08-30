import { Snake } from "./snake/snake";
import { Point, Animator } from "./animator/src/models";
import Key from "./animator/src/keyboard/key";
import { getDirectionForKey, UP, DOWN, RIGHT, LEFT } from "./controls";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./settings";
import { SnakePart } from "./snake/snake-part";
import { collision } from "./animator/index";

const validDirectionChange = (snake: Snake, newDirection: Point): boolean => {
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

export const changeSnakeDirection = (snake: Snake, key: Key): boolean => {
    let wasValid = false;
    const direction = getDirectionForKey(key);
    if (validDirectionChange(snake, direction)) {
        snake.direction = direction.copy();
        wasValid = true;
    }
    return wasValid;
}

export const collidedWithWall = (head: SnakePart): boolean => {
    if (head.x < 0 || head.x >= CANVAS_WIDTH
        || head.y < 0 || head.y >= CANVAS_HEIGHT) {
        return true;
    }
    return false;
}

export const collidedWithBody = (head: SnakePart, snake: Snake): boolean => {
    for (let snakePart of snake.path.slice(1)) {
        if (collision.checkCollision(head, snakePart)) {
            return true;
        }
    }
    return false;
}

const setCollideWithWallBorder = (animator: Animator) => {
    animator.canvasEl.classList.remove('dashed');
}

const setPassThroughWallBorder = (animator: Animator) => {
    animator.canvasEl.classList.add('dashed');
}

export const setCanvasBorder = (options: any, animator: Animator) => {
    if (options.collideWithWall) {
        setCollideWithWallBorder(animator);
    } else {
        setPassThroughWallBorder(animator);
    }
}

export const goThroughWall = (snake: Snake) => {         
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

export const getScoreTag = (num: number) => {
    let scoreTag = document.getElementById('player1-score');
    if (num === 2) {
        scoreTag = document.getElementById('player2-score');
    }
    return scoreTag;
}

export const initScoreTag = (num: number) => {
    getScoreTag(num).classList.remove('hidden');
}

export const hideScoreTag = (num: number) => {
    getScoreTag(num).classList.add('hidden');
}

export const updateScoreText = (num: number, score: number) => {
    getScoreTag(num).innerText = `Player ${num}: ${score}`;
}
