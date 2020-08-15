import { SnakePart } from './snake-part';
import { Point } from '../animator/src/models';

export class Snake {

    color: string;
    direction: Point;
    path: SnakePart[] = [];
    lastPath: SnakePart[] = [];

    constructor(x: number, y: number, color: string = '#000') {
        this.color = color;
        this.direction = new Point(1, 0);
        this.path.push(new SnakePart(x, y, this.color));
    }

    setLastPath = () => {
        const lastPath = [];
        for (let snakePart of this.path) {
            lastPath.push(snakePart.copy());
        }
        this.lastPath = lastPath;
    }

    getHead = () => {
        return this.path[0];
    }

    getTail = () => {
        return this.path[this.path.length - 1];
    }

    update = () => {
        // Preserve last path
        this.setLastPath()

        // Move the tail to the front
        let head = this.getHead();
        let tail = this.path.pop();
        const newPt = head.add(this.direction.multiply(SnakePart.partWidth));
        tail.x = newPt.x;
        tail.y = newPt.y;
        this.path.unshift(tail);
    }

    draw = (ctx: CanvasRenderingContext2D, fill: boolean = false, showBB: boolean = false) => {
        for (let snakePart of this.path) {
            snakePart.draw(ctx, fill, showBB);
        }
    }

    addPart = () => {
        if (this.path.length === 1) {
            // Add on the opposite direction where we are going
            let head = this.getHead();
            let newPt = head.add(this.direction.multiply(-SnakePart.partWidth));
            this.path.push(new SnakePart(newPt.x, newPt.y, this.color));
        } else {
            // Add on the opposite direction from the second to last part
            let pt1 = this.path[this.path.length - 2];
            let pt2 = this.getTail();
            let newPt = pt2.add(pt1.diff(pt2).direction().multiply(-SnakePart.partWidth));
            this.path.push(new SnakePart(newPt.x, newPt.y, this.color)); 
        }
    }

    getBoundingBoxes = () => {
        const bb = [];
        for (let snakePart of this.path) {
            bb.push(snakePart.getBoundingBox());
        }
        return bb;
    }

}