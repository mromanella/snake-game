import { SnakePart } from './snake-part';
import { objects } from '../animator/index';
import { GameObject } from '../animator/src/objects/game-objects';

export class Snake extends GameObject {

    color: string;
    alive: boolean = true;
    direction: objects.Point;
    path: SnakePart[] = [];
    lastPath: SnakePart[] = [];

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, updateSpeed: number, color: string = '#000') {
        super(ctx, x, y, updateSpeed)
        this.color = color;
        this.direction = new objects.Point(0, 0);
        this.path.push(new SnakePart(ctx, x, y, this.color));
    }

    setLastPath() {
        const lastPath = [];
        for (let snakePart of this.path) {
            lastPath.push(snakePart.copy());
        }
        this.lastPath = lastPath;
    }

    getHead(): SnakePart {
        return this.path[0];
    }

    getTail(): SnakePart {
        return this.path[this.path.length - 1];
    }

    update() {
        this.shouldUpdate = true;
    }

    move() {
        // Preserve last path
        this.setLastPath();

        // Move the tail to the front
        let head = this.getHead();
        let tail = this.path.pop();
        const newPt = head.location.add(this.direction.multiply(SnakePart.partWidth));
        tail.location.x = newPt.x;
        tail.location.y = newPt.y;
        this.path.unshift(tail);
    }

    draw(showBB: boolean = false) {
        for (let snakePart of this.path) {
            snakePart.draw(showBB);
        }
    }

    grow() {
        if (this.path.length === 1) {
            // Add on the opposite direction where we are going
            let head = this.getHead();
            let newPt = head.location.add(this.direction.multiply(-SnakePart.partWidth));
            let part = new SnakePart(this.ctx, newPt.x, newPt.y, this.color);
            this.path.push(part);
        } else {
            // Add on the opposite direction from the second to last part
            let pt1 = this.path[this.path.length - 2];
            let pt2 = this.getTail();
            let newPt = pt2.location.add(pt1.location.diff(pt2.location).direction().multiply(-SnakePart.partWidth));
            let part = new SnakePart(this.ctx, newPt.x, newPt.y, this.color);
            this.path.push(part);
        }
    }

    getBoundingBoxes() {
        const bb = [];
        for (let snakePart of this.path) {
            bb.push(snakePart.getBoundingBox());
        }
        return bb;
    }

}
