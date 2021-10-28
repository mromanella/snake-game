import { collision, objects } from "../animator/index";
import { FOOD_RADIUS } from "../constants";

/**
 * What the snake eats.
 */
export class Food extends objects.shapes.Circle {

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
        super(ctx, x, y, null, FOOD_RADIUS, 'orange');
    }

    isEaten(item: objects.GameObject): boolean {
        return collision.checkCollision(this, item);
    }
}
