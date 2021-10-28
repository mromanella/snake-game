import { Food } from './food';
import { collision, objects, utils } from '../animator/index';
import { SnakePart } from '../snake/snake-part';
import { FOOD_OFFSET, PART_WIDTH } from '../constants';

export default class FoodSpawner {

    ctx: CanvasRenderingContext2D;
    numMax: number;
    xMax: number;
    yMax: number;
    foods: Food[] = [];

    constructor(ctx: CanvasRenderingContext2D, numMax: number, xMax: number, yMax: number) {
        this.ctx = ctx;
        this.numMax = numMax;
        this.xMax = xMax;
        this.yMax = yMax;
    }

    /**
 * @description Randomizes the location of the food and returns an object
 */
    randomizeFood(): Food {
        let food = new Food(this.ctx, 0, 0);
        let newFoodX = utils.randomBetween(0, this.xMax);
        let newFoodY = utils.randomBetween(0, this.yMax);
        // This calculation is to make sure the food in placed on a place that is divisible by 10 and
        // also offset by 5 which makes the box and food line up right.
        food.location.x = newFoodX - (newFoodX % PART_WIDTH) + FOOD_OFFSET;
        food.location.y = newFoodY - (newFoodY % PART_WIDTH) + FOOD_OFFSET;
        return food;
    }

    spawn(notOn: objects.GameObject[]) {
        if (this.foods.length === this.numMax) {
            return;
        }
        
        notOn = [...notOn, ...this.foods];
        const newFoods = [];
        while ((this.foods.length + newFoods.length) < this.numMax) {
            let food = this.randomizeFood();
            let ok = true;
            for (let gameObj of notOn) {
                if (food.isEaten(gameObj)) {
                    ok = false;
                    break;
                }
            }
            if (ok) {
                newFoods.push(food);
            }
        }
        this.foods.push(...newFoods);
    }

    draw(drawBB: boolean = false) {
        for (let food of this.foods) {
            food.draw(drawBB);
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
