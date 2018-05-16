import { Snake } from "./snake";

const canvasEl: any = document.getElementById('game-window');
const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
const center = canvasEl.height;
const fps = 1000 / 60;
const gameSpeed = 350;
let lastDraw: number = null;
let snake = new Snake(ctx);

window.onload = () => {
    setInterval((e: Event) => {
        snake.update();
    }, gameSpeed)
    requestAnimationFrame(main);

    // setInterval((e:Event) => {
    //     snake.addNewPart();
    // }, 5000);
}

function main(runningTime: number) {
    if (!lastDraw) lastDraw = runningTime;
    let diff = runningTime - lastDraw;

    if (diff / fps > 1) {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
        snake.draw();
        lastDraw = runningTime;
    }
    // snake.addNewPart();
    requestAnimationFrame(main);
}