import { randomizeFood, Food } from './food';
import { BoundingBox } from '../animator/src/models';
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

    getBoundingBoxes = (): BoundingBox[] => {
        const bb = [];
        for (let food of this.foods) {
            bb.push(food.getBoundingBox());
        }
        return bb;
    }

    spawn = (...notOn: BoundingBox[]) => {
        if (this.foods.length === this.numMax) {
            return;
        }
        while (true) {
            notOn = [...notOn, ...this.getBoundingBoxes()]
            let ok = false;
            let food = randomizeFood(this.xMax, this.yMax);
            for (let boundingBox of notOn) {
                if (!collision.checkCollision(food.getBoundingBox(), boundingBox)) {
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

    removeEatenFoods = (snakeHead: SnakePart): number => {
        const filtered = [];
        for (let i = 0; i < this.foods.length; i++) {
            let food = this.foods[i];
            if (!food.isEaten(snakeHead.getBoundingBox())) {
                filtered.push(food);
            }
        }
        let numEaten = this.foods.length - filtered.length;
        this.foods = filtered;
        return numEaten;
    }

}
