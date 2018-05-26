import { SnakePart } from './snake-part';

export class Snake {
    ctx: CanvasRenderingContext2D;
    body: SnakePart[] = [];
    color: string;
    direction: string = 'down';
    dimensions: any;

    constructor(context2d: CanvasRenderingContext2D, dimensions: any, color: string = '#000') {
        this.ctx = context2d;
        this.dimensions = dimensions;
        this.color = color;
        const newPart = new SnakePart(this.ctx, 200, 100, this.color);
        this.body.push(newPart);
    }

    draw() {
        this.body.map((snakePart: SnakePart, index: number, snakeParts: SnakePart[]) => {
            snakePart.draw();
        });
    }

    update() {
        this.body.map((snakePart: SnakePart, index: number, snakeParts: SnakePart[]) => {
            if (index === 0) {
                // update first block(The head), changes direction
                this.updateHead(snakePart);
            } else {
                // updating the rest
                this.updateTail(snakePart, index, snakeParts);
            }
        });
    }

    private updateHead(snakePart: SnakePart) {
        const newX = snakePart.x;
        const newY = snakePart.y;
        snakePart.lastX = newX;
        snakePart.lastY = newY;
        if (this.direction === 'right') {
            snakePart.x = newX + SnakePart.partWidth;
            if (snakePart.x >= this.dimensions.x) {
                snakePart.x = 0;
            }
        } else if (this.direction === 'left') {
            snakePart.x = newX - SnakePart.partWidth;
            if (snakePart.x < 0) {
                snakePart.x = this.dimensions.x - SnakePart.partWidth;
            }
        } else if (this.direction === 'down') {
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

    private updateTail(snakePart: SnakePart, index: number, body: SnakePart[]) {
        // save last location
        snakePart.lastX = snakePart.x;
        snakePart.lastY = snakePart.y;
        // update the the part infront of this ones last location
        snakePart.x = body[index - 1].lastX;
        snakePart.y = body[index - 1].lastY;
    }

    addNewPart() {
        // if there is only 1 block add the new part onto the back
        // using the current direction of snake as forward direction
        let newPart: SnakePart = null;
        const lastPart = this.body[this.body.length - 1];
        if (this.body.length === 1) {
            newPart = this.createAdjacentHeadPart(lastPart);
        } else {
            const secondToLast = this.body[this.body.length - 2];
            newPart = this.createNewTailPart(lastPart, secondToLast);
        }
        console.log(`Adding x: ${newPart.x}, y: ${newPart.y}`);
        newPart.color = 'orange';
        this.body.push(newPart);
    }

    private createAdjacentHeadPart(lastPart: SnakePart): SnakePart {
        let newX = lastPart.x;
        let newY = lastPart.y;
        if (this.direction === 'right') {
            newX -= SnakePart.partWidth;
        } else if (this.direction === 'left') {
            newX += SnakePart.partWidth;
        } else if (this.direction === 'down') {
            newY -= SnakePart.partWidth;
        } else {
            newY += SnakePart.partWidth;
        }
        return new SnakePart(this.ctx, newX, newY, this.color);
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

        return new SnakePart(this.ctx, newX, newY, this.color);
    }
}