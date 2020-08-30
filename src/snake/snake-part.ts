import { Rectangle } from "../animator/src/models";
import { CANVAS_WIDTH, PART_WIDTH } from "../constants";

export class SnakePart extends Rectangle {

    // also height
    static partWidth: number = PART_WIDTH;

    constructor(x: number, y: number, color: string = '#000') {
        super(x, y, SnakePart.partWidth, SnakePart.partWidth, color);
    }

    copy = () => {
        return new SnakePart(this.x, this.y, this.color);
    }
}