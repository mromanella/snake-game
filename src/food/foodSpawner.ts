import { Food } from './food';
import { Circle, GameObject } from '../animator/src/models';
import { collision } from '../animator/index';
import { SnakePart } from '../snake/snake-part';
import { randomBetween } from '../animator/src/utils';
import { FOOD_OFFSET } from '../constants';

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
        food.x = newFoodX - (newFoodX % 20) + FOOD_OFFSET;
        food.y = newFoodY - (newFoodY % 20) + FOOD_OFFSET;
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
            // Can't forget about offset
            let c = new Circle(food.x - FOOD_OFFSET, food.y - FOOD_OFFSET, food.radius, 'white');
            for (let gameObj of notOn) {
                if (!collision.checkCollision(c, gameObj)) {
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
        const notEaten = [];
        const eaten = [];
        for (let i = 0; i < this.foods.length; i++) {
            let food = this.foods[i];
            if (food.isEaten(snakeHead)) {
                eaten.push(food);
            } else {
                notEaten.push(food);
            }
        }
        let numEaten = eaten.length;
        this.foods = notEaten;
        return numEaten > 0;
    }

}
