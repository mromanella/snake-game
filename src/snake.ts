import { SnakePart } from './snake-part';

// directions
export const UP = 38;
export const LEFT = 37;
export const DOWN = 40;
export const RIGHT = 39;
export const KEYS = [UP, LEFT, DOWN, RIGHT];

export class Snake {
    body: SnakePart[] = [];
    color: string;
    direction: number;
    dimensions: any;

    constructor(dimensions: any, color: string = '#000', direction: number = RIGHT) {
        this.dimensions = dimensions;
        this.color = color;
        this.direction = direction;
        const newPart = new SnakePart(200, 100, this.color);
        this.body.push(newPart);
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let snakePart of this.body) {
            snakePart.draw(ctx);
        }
    }

    update() {
        for (let index = 0; index < this.body.length; index++) {
            let snakePart = this.body[index];
            if (index === 0) {
                // update first block(The head), changes direction
                this.updateHead(snakePart);
            } else {
                // updating the rest
                this.updateTail(snakePart, index);
            }
        }
    }

    private updateHead(snakePart: SnakePart) {
        const newX = snakePart.x;
        const newY = snakePart.y;
        snakePart.lastX = newX;
        snakePart.lastY = newY;
        if (this.direction === RIGHT) {
            snakePart.x = newX + SnakePart.partWidth;
            if (snakePart.x >= this.dimensions.x) {
                snakePart.x = 0;
            }
        } else if (this.direction === LEFT) {
            snakePart.x = newX - SnakePart.partWidth;
            if (snakePart.x < 0) {
                snakePart.x = this.dimensions.x - SnakePart.partWidth;
            }
        } else if (this.direction === DOWN) {
            snakePart.y = newY + SnakePart.partWidth;
            if (snakePart.y >= this.dimensions.y) {
                snakePart.y = 0;
            }
        } else {
            snakePart.y = newY - SnakePart.partWidth;
            if (snakePart.y < 0) {
                snakePart.y = this.dimensions.y - SnakePart.partWidth;
            }
        }
    }

    private updateTail(snakePart: SnakePart, index: number) {
        // save last location
        snakePart.lastX = snakePart.x;
        snakePart.lastY = snakePart.y;
        // update the the part infront of this ones last location
        snakePart.x = this.body[index - 1].lastX;
        snakePart.y = this.body[index - 1].lastY;
    }

    addNewPart() {
        // if there is only 1 block add the new part onto the back
        // using the current direction of snake as forward direction
        let newPart: SnakePart = null;
        const lastPart = this.body[this.body.length - 1];
        if (this.body.length <= 2) {
            newPart = this.createAdjacentHeadPart(lastPart);
        } else {
            const secondToLast = this.body[this.body.length - 2];
            newPart = this.createNewTailPart(lastPart, secondToLast);
        }
        newPart.color = 'orange';
        this.body.push(newPart);
    }

    private createAdjacentHeadPart(lastPart: SnakePart): SnakePart {
        let newX = lastPart.x;
        let newY = lastPart.y;
        if (this.direction === RIGHT) {
            newX -= SnakePart.partWidth;
        } else if (this.direction === LEFT) {
            newX += SnakePart.partWidth;
        } else if (this.direction === DOWN) {
            newY -= SnakePart.partWidth;
        } else {
            newY += SnakePart.partWidth;
        }
        return new SnakePart(newX, newY, this.color);
    }

    private createNewTailPart(lastPart: SnakePart, secondToLast: SnakePart): SnakePart {
        let newX = lastPart.x;
        let newY = lastPart.y;
        const diffX = secondToLast.x - lastPart.x;
        // second to last x is greater than last x we are moving to the right
        if (diffX !== 0) {
            // if not equal to 0 than we need to add it horizontally
            newX += (Math.sign(diffX) * SnakePart.partWidth);
        }
        const diffY = secondToLast.y - lastPart.y;
        if (diffY !== 0) {
            newY += (Math.sign(diffY) * SnakePart.partWidth);
        }

        return new SnakePart(newX, newY, this.color);
    }
}