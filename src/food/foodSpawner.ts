import { randomizeFood, Food } from './food';
import { GameObject } from '../animator/src/models';
import { collision } from '../animator/index';
import { SnakePart } from '../snake/snake-part';

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

    spawn = (...notOn: GameObject[]) => {
        if (this.foods.length === this.numMax) {
            return;
        }
        while (true) {
            notOn = [...notOn, ...this.foods]
            let ok = false;
            let food = randomizeFood(this.xMax, this.yMax);
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

    draw = (ctx: CanvasRenderingContext2D, drawBB: boolean = false) => {
        for (let food of this.foods) {
            food.draw(ctx, true, drawBB);
        }
    }

    removeEatenFoods = (snakeHead: SnakePart): boolean => {
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
