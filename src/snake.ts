import { SnakePart } from './snake-part';

export class Snake {
    ctx: CanvasRenderingContext2D;
    snakeParts: SnakePart[] = [];
    direction: string = 'down';

    constructor(context2d: CanvasRenderingContext2D) {
        this.ctx = context2d;
        const newPart = new SnakePart(this.ctx, 200, 100);
        this.snakeParts.push(newPart);

        // set up keyboard listeners
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            e.stopPropagation();
            if (e.keyCode === 40) {
                if (this.direction !== 'up') {
                    this.direction = 'down';
                }
            } else if (e.keyCode === 38) {
                if (this.direction !== 'down') {
                    this.direction = 'up';
                }
            } else if (e.keyCode === 39) {
                if (this.direction !== 'left') {
                    this.direction = 'right';
                }
            } else if (e.keyCode === 37) {
                if (this.direction !== 'right') {
                    this.direction = 'left';
                }
            }
        });
    }

    draw() {
        this.snakeParts.map((snakePart: SnakePart, index: number, snakeParts: SnakePart[]) => {
            snakePart.draw();
        });
    }

    update() {
        // update first block
        let snakePart = this.snakeParts[0];
        const newX = snakePart.x;
        const newY = snakePart.y;
        snakePart.lastX = newX;
        snakePart.lastY = newY;
        if (this.direction === 'right') {
            snakePart.x = newX + SnakePart.partWidth;
            if (snakePart.x >= 600) {
                snakePart.x = 0;
            }
        } else if (this.direction === 'left') {
            snakePart.x = newX - SnakePart.partWidth;
            if (snakePart.x < 0) {
                snakePart.x = 600 - SnakePart.partWidth;
            }
        } else if (this.direction === 'down') {
            snakePart.y = newY + SnakePart.partWidth;
            if (snakePart.y >= 400) {
                snakePart.y = 0;
            }
        } else {
            snakePart.y = newY - SnakePart.partWidth;
            if (snakePart.y < 0) {
                snakePart.y = 400 - SnakePart.partWidth;
            }
        }

        // update the rest
        this.snakeParts.map((snakePart: SnakePart, index: number, snakeParts: SnakePart[]) => {
            if (index !== 0) {
                // save last location
                snakePart.lastX = snakePart.x;
                snakePart.lastY = snakePart.y;
                // update the the part infront of this ones last location
                snakePart.x = snakeParts[index - 1].lastX;
                snakePart.y = snakeParts[index - 1].lastY;
            }
        });
    }

    addNewPart() {
        const lastPart = this.snakeParts[this.snakeParts.length - 1];
        // if there is only 1 block add the new part onto the back
        // using the current direction of snake as forward direction
        let newX = lastPart.x;
        let newY = lastPart.y;
        if (this.snakeParts.length === 1) {
            if (this.direction === 'right') {
                newX -= SnakePart.partWidth;
            } else if (this.direction === 'left') {
                newX += SnakePart.partWidth;
            } else if (this.direction === 'down') {
                newY -= SnakePart.partWidth;
            } else {
                newY += SnakePart.partWidth;
            }
        } else {
            const secondToLast = this.snakeParts[this.snakeParts.length - 2];
            // second to last x is greater than last x we are moving to the right
            const x = secondToLast
        }

        const newPart = new SnakePart(this.ctx, newX, newY);
        this.snakeParts.push(newPart);
    }

}