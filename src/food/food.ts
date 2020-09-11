import { Circle, GameObject } from "../animator/src/models";
import { collision } from "../animator/index";

/**
 * What the snake eats.
 */
export class Food extends Circle {

    constructor(x: number, y: number) {
        super(x, y, 4, 'orange');
    }

    isEaten(item: GameObject): boolean {
        return collision.checkCollision(this, item);
    }
}
