import { Snake } from "./snake";
import { SnakePart } from "./snake-part";

import './index.css';

const canvasEl: any = document.getElementById('game-window');
const ctx: CanvasRenderingContext2D = canvasEl.getContext('2d');
const scoreTag = document.getElementById('score');
const center = canvasEl.height;
const width = canvasEl.width;
const height = canvasEl.height;
const dim = { x: width, y: height };
const fps = 1000 / 30;
let gameSpeed = 500;
let gameSpeedDelta = 10;
let gameInterval: number = null;
let gameRunning = true;
let lastKeyPressed = 39;
let lastDraw: number = null;
let snake = new Snake(ctx, dim);
let food = randomizeFood();
let score = 0;


/**
 * Food is an interface representing the x and y location of the
 * food object
 */
interface Food {
    x: number,
    y: number
}

window.onload = () => {

    setupControls();

    // interval of the snakes movement
    gameInterval = setInterval(gameLoop, gameSpeed)

    // start animating
    requestAnimationFrame(animation);
}

/**
 * @description Vibrates phone if available
 */
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

/**
 * @description Determines if mobile browser is in use
 * @returns true or false
 */
function mobileCheck() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
    // return true;
    return check;
}

function setupControls() {
    // determine if we are being run on mobile
    if (mobileCheck()) {
        // setup button press listeners
        document.getElementById('up').onclick = (e: Event) => {
            vibrate();
            setDirection(38);
        }
        document.getElementById('left').onclick = (e: Event) => {
            vibrate();
            setDirection(37);
        }
        document.getElementById('down').onclick = (e: Event) => {
            vibrate();
            setDirection(40);
        }
        document.getElementById('right').onclick = (e: Event) => {
            vibrate();
            setDirection(39);
        }

        // display buttons for direction controls
        let directionControls = document.getElementById('direction-controls');
        directionControls.style.visibility = 'visible';

    } else {
        // set up keyboard listeners
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            e.stopPropagation();
            let key = e.keyCode;
            setDirection(key);
        });
    }
}

/**
 * @description Sets the last pressed key
 * @param key Keycode number
 */
function setDirection(key: number) {
    if (key === 40 ||
        key === 38 ||
        key === 39 ||
        key === 37) {
        lastKeyPressed = key;
    }
}

/**
 * @description Validates the last pressed direction. 
 * The snake cannot go backwards, for example if moving up it cannot
 * move down without first going to one side.
 */
function validateDirectionChange() {
    if (lastKeyPressed === 40) {
        if (snake.direction !== 'up') {
            snake.direction = 'down';
        }
    } else if (lastKeyPressed === 38) {
        if (snake.direction !== 'down') {
            snake.direction = 'up';
        }
    } else if (lastKeyPressed === 39) {
        if (snake.direction !== 'left') {
            snake.direction = 'right';
        }
    } else if (lastKeyPressed === 37) {
        if (snake.direction !== 'right') {
            snake.direction = 'left';
        }
    }
}

/**
 * @description Randomizes the location of the food and returns an object
 */
function randomizeFood(): Food {
    let food: Food = { x: 0, y: 0 };
    let newFoodX = Math.floor(Math.random() * width);
    let newFoodY = Math.floor(Math.random() * height);
    food.x = newFoodX - (newFoodX % 10) + 5;
    food.y = newFoodY - (newFoodY % 10) + 5;
    return food;
}

/**
 * @description Checks if the head of the snake is in the
 * same location as a part of the body.
 * @returns true if collision, else false
 */
function checkForCollision(): boolean {
    const headX = snake.body[0].x;
    const headY = snake.body[0].y;
    for (let index = 1; index < snake.body.length; index++) {
        let snakePart = snake.body[index];
        if (index > 2 && snakePart.x === headX && snakePart.y === headY) {
            // collision detected
            snakePart.color = 'red';
            snakePart.draw();
            return true;
        }
    }
    return false;
}

/**
 * @description Checks to see if the food is within the head block
 * @returns true if food was eaten, else false
 */
function isPartOnFood(part: SnakePart): boolean {
    if ((food.x >= part.x && food.x <= part.x + SnakePart.partWidth)
        && (food.y >= part.y && food.y <= part.y + SnakePart.partWidth)) {
        return true;
    }
    return false;
}

/**
 * @description Draws the food onto the canvas
 */
function drawFood() {
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.arc(food.x, food.y, 4, 0, 2 * Math.PI, false);
    ctx.fill();
}

/**
 * @description Checks each body part to see if it is on food.
 * @returns true if a part is on food, false if not
 */
function checkPartsForLocation() {
    for (let part of snake.body) {
        if (isPartOnFood(part)) {
            return true;
        }
    }
    return false;
}

/**
 * @description Main game loop and animation
 */
function gameLoop() {
    // check to see if the last key pressed was a valid key press
    // ie. Not backwards
    if (gameRunning) {
        validateDirectionChange();
        snake.update();

        // check if collision, collision takes place if x and y of 
        // head === any other parts x and y  
        let collisionOccured = checkForCollision();
        gameRunning = !collisionOccured;

        const head = snake.body[0];
        if (isPartOnFood(head)) {
            score++;
            let scoreStr = String(score * 100);
            scoreTag.innerHTML = scoreStr;
            food = randomizeFood();
            while (checkPartsForLocation()) {
                food = randomizeFood();
            }
            snake.addNewPart();
            if (gameSpeed > 150) {
                gameSpeed -= (0.02 * (score * 100));
                clearInterval(gameInterval);
                gameInterval = setInterval(gameLoop, gameSpeed)
            }
        }
    } else {
        clearInterval(gameInterval);
    }
}

/**
 * @description Draws the snake and food onto the canvas
 * @param runningTime precise time
 */
function animation(runningTime: number) {
    if (!lastDraw) lastDraw = runningTime;
    let diff = runningTime - lastDraw;

    if (gameRunning) {
        if (diff / fps > 1) {
            ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
            drawFood();
            snake.draw();
            lastDraw = runningTime;
        }
        requestAnimationFrame(animation);
    }
}