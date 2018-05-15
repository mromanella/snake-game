export class SnakePart {

    // also height
    static readonly partWidth: number = 10;

    ctx: CanvasRenderingContext2D;
    x: number;
    y: number;
    lastX: number;
    lastY: number;
    color: string;
    moves: object[] = [];

    constructor(context2d: CanvasRenderingContext2D, x: number, y: number, color: string = '#000') {
        this.ctx = context2d;
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, SnakePart.partWidth, SnakePart.partWidth);
    }
}