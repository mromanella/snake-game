import { objects } from "../animator/index";
import { PART_WIDTH } from "../constants";

export class SnakePart extends objects.shapes.Rectangle {

    // also height
    static partWidth: number = PART_WIDTH;

    constructor(ctx: CanvasRenderingContext2D, x: number, y: number, color: string = '#000') {
        super(ctx, x, y, null, SnakePart.partWidth, SnakePart.partWidth, color);
    }

    copy(): SnakePart {
        return new SnakePart(this.ctx, this.location.x, this.location.y, this.color);
    }
}
