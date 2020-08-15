import { Snake } from "./snake/snake";
import { Point } from "./animator/src/models";
import Key from "./animator/src/keyboard/key";
import { getDirectionForKey } from "./controls";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "./settings";
import { SnakePart } from "./snake/snake-part";
import { collision } from "./animator/index";
import { Player } from "./player";

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

export const lockKeys = (keys: Key[]) => {
    for (let key of keys) {
        key.setLocked(true);
    }
}
