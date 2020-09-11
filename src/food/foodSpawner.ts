import { Food } from './food';
import { GameObject } from '../animator/src/models';
import { collision } from '../animator/index';
import { SnakePart } from '../snake/snake-part';
import { randomBetween } from '../animator/src/utils';

export default class FoodSpawner {

    numMax: number;
    xMax: number;
    yMax: number;
    foods: Food[] = [];

    constructor(numMax: number, xMax: number, yMax: number) {
        this.numMax = numMax;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    /**
 * @description Randomizes the location of the food and returns an object
 */
    randomizeFood(xMax: number, yMax: number): Food {
        let food = new Food(0, 0);
        let newFoodX = randomBetween(0, xMax);
        let newFoodY = randomBetween(0, yMax);
        // This calculation is to make sure the food in placed on a place that is divisible by 10 and
        // also offset by 5 which makes the box and food line up right.
        food.x = newFoodX - (newFoodX % 10) + 5;
        food.y = newFoodY - (newFoodY % 10) + 5;
        return food;
    }


    spawn(...notOn: GameObject[]) {
        if (this.foods.length === this.numMax) {
            return;
        }
        while (true) {
            notOn = [...notOn, ...this.foods]
            let ok = false;
            let food = this.randomizeFood(this.xMax, this.yMax);
            for (let gameObj of notOn) {
                if (!collision.checkCollision(food, gameObj)) {
                    ok = true;
                    break;
                }
            }
            if (ok) {
                this.foods.push(food);
                if (this.foods.length === this.numMax) {
                    break;
                }
            }
        }
    }

    draw(ctx: CanvasRenderingContext2D, drawBB: boolean = false) {
        for (let food of this.foods) {
            food.draw(ctx, true, drawBB);
        }
    }

    removeEatenFoods(snakeHead: SnakePart): boolean {
        const filtered = [];
        for (let i = 0; i < this.foods.length; i++) {
            let food = this.foods[i];
            if (!food.isEaten(snakeHead)) {
                filtered.push(food);
            }
        }
        let numEaten = this.foods.length - filtered.length;
        this.foods = filtered;
        return numEaten > 0;
    }

}
