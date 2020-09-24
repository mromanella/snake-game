import { Circle, GameObject } from "../animator/src/models";
import { collision } from "../animator/index";
import { FOOD_RADIUS } from "../constants";

/**
 * What the snake eats.
 */
export class Food extends Circle {

    constructor(x: number, y: number) {
        super(x, y, FOOD_RADIUS, 'orange');
    }

    isEaten(item: GameObject): boolean {
        return collision.checkCollision(this, item);
    }
}
