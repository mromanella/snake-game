import { Circle, BoundingBox } from "../animator/src/models";
import { randomBetween } from "../animator/src/utils";
import { collision } from "../animator/index";

/**
 * What the snake eats.
 */
export class Food extends Circle {

    constructor(x: number, y: number) {
        super(x, y, 4, 'orange');
    }

    isEaten = (boundingBox: BoundingBox): boolean => {
        return collision.checkCollision(this.getBoundingBox(), boundingBox);
    }
}

/**
 * @description Randomizes the location of the food and returns an object
 */
export const randomizeFood = (xMax: number, yMax: number): Food => {
    let food = new Food(0, 0);
    let newFoodX = randomBetween(0, xMax);
    let newFoodY = randomBetween(0, yMax);
    // This calculation is to make sure the food in placed on a place that is divisible by 10 and 
    // also offset by 5 which makes the box and food line up right.
    food.x = newFoodX - (newFoodX % 10) + 5;
    food.y = newFoodY - (newFoodY % 10) + 5;
    return food;
}