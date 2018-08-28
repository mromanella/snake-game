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

    constructor(x: number, y: number, color: string = '#000') {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, SnakePart.partWidth, SnakePart.partWidth);
    }
}