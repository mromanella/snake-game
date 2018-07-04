/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ "./src/snake.ts");
/* harmony import */ var _snake_part__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snake-part */ "./src/snake-part.ts");


const canvasEl = document.getElementById('game-window');
const ctx = canvasEl.getContext('2d');
const scoreTag = document.getElementById('score');
const center = canvasEl.height;
const width = canvasEl.width;
const height = canvasEl.height;
const dim = { x: width, y: height };
const fps = 1000 / 30;
let gameSpeed = 500;
let gameSpeedDelta = 10;
let gameInterval = null;
let gameRunning = true;
let lastKeyPressed = 39;
let lastDraw = null;
let snake = new _snake__WEBPACK_IMPORTED_MODULE_0__["Snake"](ctx, dim);
let food = randomizeFood();
let score = 0;
window.onload = () => {
    setupControls();
    // interval of the snakes movement
    gameInterval = setInterval(gameLoop, gameSpeed);
    // start animating
    requestAnimationFrame(animation);
};
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
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
        check = true; })(navigator.userAgent || navigator.vendor);
    // return true;
    return check;
}
function setupControls() {
    // determine if we are being run on mobile
    if (mobileCheck()) {
        // setup button press listeners
        document.getElementById('up').onclick = (e) => {
            vibrate();
            setDirection(38);
        };
        document.getElementById('left').onclick = (e) => {
            vibrate();
            setDirection(37);
        };
        document.getElementById('down').onclick = (e) => {
            vibrate();
            setDirection(40);
        };
        document.getElementById('right').onclick = (e) => {
            vibrate();
            setDirection(39);
        };
        // display buttons for direction controls
        let directionControls = document.getElementById('direction-controls');
        directionControls.style.visibility = 'visible';
    }
    else {
        // set up keyboard listeners
        window.addEventListener('keydown', (e) => {
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
function setDirection(key) {
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
    }
    else if (lastKeyPressed === 38) {
        if (snake.direction !== 'down') {
            snake.direction = 'up';
        }
    }
    else if (lastKeyPressed === 39) {
        if (snake.direction !== 'left') {
            snake.direction = 'right';
        }
    }
    else if (lastKeyPressed === 37) {
        if (snake.direction !== 'right') {
            snake.direction = 'left';
        }
    }
}
/**
 * @description Randomizes the location of the food and returns an object
 */
function randomizeFood() {
    let food = { x: 0, y: 0 };
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
function checkForCollision() {
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
function isPartOnFood(part) {
    if ((food.x >= part.x && food.x <= part.x + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)
        && (food.y >= part.y && food.y <= part.y + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)) {
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
                console.log(gameSpeed);
                clearInterval(gameInterval);
                gameInterval = setInterval(gameLoop, gameSpeed);
            }
        }
    }
    else {
        clearInterval(gameInterval);
    }
}
/**
 * @description Draws the snake and food onto the canvas
 * @param runningTime precise time
 */
function animation(runningTime) {
    if (!lastDraw)
        lastDraw = runningTime;
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


/***/ }),

/***/ "./src/snake-part.ts":
/*!***************************!*\
  !*** ./src/snake-part.ts ***!
  \***************************/
/*! exports provided: SnakePart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakePart", function() { return SnakePart; });
class SnakePart {
    constructor(context2d, x, y, color = '#000') {
        this.moves = [];
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
// also height
SnakePart.partWidth = 10;


/***/ }),

/***/ "./src/snake.ts":
/*!**********************!*\
  !*** ./src/snake.ts ***!
  \**********************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
/* harmony import */ var _snake_part__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake-part */ "./src/snake-part.ts");

class Snake {
    constructor(context2d, dimensions, color = '#000') {
        this.body = [];
        this.direction = 'down';
        this.ctx = context2d;
        this.dimensions = dimensions;
        this.color = color;
        const newPart = new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](this.ctx, 200, 100, this.color);
        this.body.push(newPart);
    }
    draw() {
        for (let snakePart of this.body) {
            snakePart.draw();
        }
    }
    update() {
        for (let index = 0; index < this.body.length; index++) {
            let snakePart = this.body[index];
            if (index === 0) {
                // update first block(The head), changes direction
                this.updateHead(snakePart);
            }
            else {
                // updating the rest
                this.updateTail(snakePart, index, this.body);
            }
        }
    }
    updateHead(snakePart) {
        const newX = snakePart.x;
        const newY = snakePart.y;
        snakePart.lastX = newX;
        snakePart.lastY = newY;
        if (this.direction === 'right') {
            snakePart.x = newX + _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.x >= this.dimensions.x) {
                snakePart.x = 0;
            }
        }
        else if (this.direction === 'left') {
            snakePart.x = newX - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.x < 0) {
                snakePart.x = this.dimensions.x - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            }
        }
        else if (this.direction === 'down') {
            snakePart.y = newY + _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.y >= this.dimensions.y) {
                snakePart.y = 0;
            }
        }
        else {
            snakePart.y = newY - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            if (snakePart.y < 0) {
                snakePart.y = this.dimensions.y - _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
            }
        }
    }
    updateTail(snakePart, index, body) {
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
        let newPart = null;
        const lastPart = this.body[this.body.length - 1];
        if (this.body.length <= 2) {
            newPart = this.createAdjacentHeadPart(lastPart);
        }
        else {
            const secondToLast = this.body[this.body.length - 2];
            newPart = this.createNewTailPart(lastPart, secondToLast);
        }
        newPart.color = 'orange';
        this.body.push(newPart);
    }
    createAdjacentHeadPart(lastPart) {
        let newX = lastPart.x;
        let newY = lastPart.y;
        if (this.direction === 'right') {
            newX -= _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else if (this.direction === 'left') {
            newX += _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else if (this.direction === 'down') {
            newY -= _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        else {
            newY += _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth;
        }
        return new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](this.ctx, newX, newY, this.color);
    }
    createNewTailPart(lastPart, secondToLast) {
        let newX = lastPart.x;
        let newY = lastPart.y;
        const diffX = secondToLast.x - lastPart.x;
        // second to last x is greater than last x we are moving to the right
        if (diffX !== 0) {
            // if not equal to 0 than we need to add it horizontally
            newX += (Math.sign(diffX) * _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth);
        }
        const diffY = secondToLast.y - lastPart.y;
        if (diffY !== 0) {
            newY += (Math.sign(diffY) * _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"].partWidth);
        }
        return new _snake_part__WEBPACK_IMPORTED_MODULE_0__["SnakePart"](this.ctx, newX, newY, this.color);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS1wYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FZ0M7QUFDUztBQUV6QyxNQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdELE1BQU0sR0FBRyxHQUE2QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUs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Q0FBQyxHQUFHLHFEQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLHFEQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0oiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL3NuYWtlXCI7XG5pbXBvcnQgeyBTbmFrZVBhcnQgfSBmcm9tIFwiLi9zbmFrZS1wYXJ0XCI7XG5cbmNvbnN0IGNhbnZhc0VsOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS13aW5kb3cnKTtcbmNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IHNjb3JlVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5jb25zdCBjZW50ZXIgPSBjYW52YXNFbC5oZWlnaHQ7XG5jb25zdCB3aWR0aCA9IGNhbnZhc0VsLndpZHRoO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzRWwuaGVpZ2h0O1xuY29uc3QgZGltID0geyB4OiB3aWR0aCwgeTogaGVpZ2h0IH07XG5jb25zdCBmcHMgPSAxMDAwIC8gMzA7XG5sZXQgZ2FtZVNwZWVkID0gNTAwO1xubGV0IGdhbWVTcGVlZERlbHRhID0gMTA7XG5sZXQgZ2FtZUludGVydmFsOiBudW1iZXIgPSBudWxsO1xubGV0IGdhbWVSdW5uaW5nID0gdHJ1ZTtcbmxldCBsYXN0S2V5UHJlc3NlZCA9IDM5O1xubGV0IGxhc3REcmF3OiBudW1iZXIgPSBudWxsO1xubGV0IHNuYWtlID0gbmV3IFNuYWtlKGN0eCwgZGltKTtcbmxldCBmb29kID0gcmFuZG9taXplRm9vZCgpO1xubGV0IHNjb3JlID0gMDtcblxuXG4vKipcbiAqIEZvb2QgaXMgYW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyB0aGUgeCBhbmQgeSBsb2NhdGlvbiBvZiB0aGVcbiAqIGZvb2Qgb2JqZWN0XG4gKi9cbmludGVyZmFjZSBGb29kIHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyXG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICBzZXR1cENvbnRyb2xzKCk7XG5cbiAgICAvLyBpbnRlcnZhbCBvZiB0aGUgc25ha2VzIG1vdmVtZW50XG4gICAgZ2FtZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2FtZUxvb3AsIGdhbWVTcGVlZClcblxuICAgIC8vIHN0YXJ0IGFuaW1hdGluZ1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyBwaG9uZSBpZiBhdmFpbGFibGVcbiAqL1xuZnVuY3Rpb24gdmlicmF0ZSgpIHtcbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpIHtcbiAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMzApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiBtb2JpbGUgYnJvd3NlciBpcyBpbiB1c2VcbiAqIEByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAqL1xuZnVuY3Rpb24gbW9iaWxlQ2hlY2soKSB7XG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgKGZ1bmN0aW9uIChhKSB7IGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlOyB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIC8vIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBjaGVjaztcbn1cblxuZnVuY3Rpb24gc2V0dXBDb250cm9scygpIHtcbiAgICAvLyBkZXRlcm1pbmUgaWYgd2UgYXJlIGJlaW5nIHJ1biBvbiBtb2JpbGVcbiAgICBpZiAobW9iaWxlQ2hlY2soKSkge1xuICAgICAgICAvLyBzZXR1cCBidXR0b24gcHJlc3MgbGlzdGVuZXJzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cCcpLm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZpYnJhdGUoKTtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbigzOCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oMzcpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3duJykub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdmlicmF0ZSgpO1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKDQwKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oMzkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzcGxheSBidXR0b25zIGZvciBkaXJlY3Rpb24gY29udHJvbHNcbiAgICAgICAgbGV0IGRpcmVjdGlvbkNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbi1jb250cm9scycpO1xuICAgICAgICBkaXJlY3Rpb25Db250cm9scy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2V0IHVwIGtleWJvYXJkIGxpc3RlbmVyc1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGxhc3QgcHJlc3NlZCBrZXlcbiAqIEBwYXJhbSBrZXkgS2V5Y29kZSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gc2V0RGlyZWN0aW9uKGtleTogbnVtYmVyKSB7XG4gICAgaWYgKGtleSA9PT0gNDAgfHxcbiAgICAgICAga2V5ID09PSAzOCB8fFxuICAgICAgICBrZXkgPT09IDM5IHx8XG4gICAgICAgIGtleSA9PT0gMzcpIHtcbiAgICAgICAgbGFzdEtleVByZXNzZWQgPSBrZXk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGxhc3QgcHJlc3NlZCBkaXJlY3Rpb24uIFxuICogVGhlIHNuYWtlIGNhbm5vdCBnbyBiYWNrd2FyZHMsIGZvciBleGFtcGxlIGlmIG1vdmluZyB1cCBpdCBjYW5ub3RcbiAqIG1vdmUgZG93biB3aXRob3V0IGZpcnN0IGdvaW5nIHRvIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZURpcmVjdGlvbkNoYW5nZSgpIHtcbiAgICBpZiAobGFzdEtleVByZXNzZWQgPT09IDQwKSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM4KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM5KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM3KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmFuZG9taXplcyB0aGUgbG9jYXRpb24gb2YgdGhlIGZvb2QgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbWl6ZUZvb2QoKTogRm9vZCB7XG4gICAgbGV0IGZvb2Q6IEZvb2QgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBsZXQgbmV3Rm9vZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCk7XG4gICAgbGV0IG5ld0Zvb2RZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVpZ2h0KTtcbiAgICBmb29kLnggPSBuZXdGb29kWCAtIChuZXdGb29kWCAlIDEwKSArIDU7XG4gICAgZm9vZC55ID0gbmV3Rm9vZFkgLSAobmV3Rm9vZFkgJSAxMCkgKyA1O1xuICAgIHJldHVybiBmb29kO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIGhlYWQgb2YgdGhlIHNuYWtlIGlzIGluIHRoZVxuICogc2FtZSBsb2NhdGlvbiBhcyBhIHBhcnQgb2YgdGhlIGJvZHkuXG4gKiBAcmV0dXJucyB0cnVlIGlmIGNvbGxpc2lvbiwgZWxzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBjaGVja0ZvckNvbGxpc2lvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBoZWFkWCA9IHNuYWtlLmJvZHlbMF0ueDtcbiAgICBjb25zdCBoZWFkWSA9IHNuYWtlLmJvZHlbMF0ueTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDwgc25ha2UuYm9keS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgbGV0IHNuYWtlUGFydCA9IHNuYWtlLmJvZHlbaW5kZXhdO1xuICAgICAgICBpZiAoaW5kZXggPiAyICYmIHNuYWtlUGFydC54ID09PSBoZWFkWCAmJiBzbmFrZVBhcnQueSA9PT0gaGVhZFkpIHtcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuICAgICAgICAgICAgc25ha2VQYXJ0LmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBzbmFrZVBhcnQuZHJhdygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgdG8gc2VlIGlmIHRoZSBmb29kIGlzIHdpdGhpbiB0aGUgaGVhZCBibG9ja1xuICogQHJldHVybnMgdHJ1ZSBpZiBmb29kIHdhcyBlYXRlbiwgZWxzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BhcnRPbkZvb2QocGFydDogU25ha2VQYXJ0KTogYm9vbGVhbiB7XG4gICAgaWYgKChmb29kLnggPj0gcGFydC54ICYmIGZvb2QueCA8PSBwYXJ0LnggKyBTbmFrZVBhcnQucGFydFdpZHRoKVxuICAgICAgICAmJiAoZm9vZC55ID49IHBhcnQueSAmJiBmb29kLnkgPD0gcGFydC55ICsgU25ha2VQYXJ0LnBhcnRXaWR0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRHJhd3MgdGhlIGZvb2Qgb250byB0aGUgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIGRyYXdGb29kKCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguYXJjKGZvb2QueCwgZm9vZC55LCA0LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyBlYWNoIGJvZHkgcGFydCB0byBzZWUgaWYgaXQgaXMgb24gZm9vZC5cbiAqIEByZXR1cm5zIHRydWUgaWYgYSBwYXJ0IGlzIG9uIGZvb2QsIGZhbHNlIGlmIG5vdFxuICovXG5mdW5jdGlvbiBjaGVja1BhcnRzRm9yTG9jYXRpb24oKSB7XG4gICAgZm9yIChsZXQgcGFydCBvZiBzbmFrZS5ib2R5KSB7XG4gICAgICAgIGlmIChpc1BhcnRPbkZvb2QocGFydCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gTWFpbiBnYW1lIGxvb3AgYW5kIGFuaW1hdGlvblxuICovXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIGxhc3Qga2V5IHByZXNzZWQgd2FzIGEgdmFsaWQga2V5IHByZXNzXG4gICAgLy8gaWUuIE5vdCBiYWNrd2FyZHNcbiAgICBpZiAoZ2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdmFsaWRhdGVEaXJlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgc25ha2UudXBkYXRlKCk7XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY29sbGlzaW9uLCBjb2xsaXNpb24gdGFrZXMgcGxhY2UgaWYgeCBhbmQgeSBvZiBcbiAgICAgICAgLy8gaGVhZCA9PT0gYW55IG90aGVyIHBhcnRzIHggYW5kIHkgIFxuICAgICAgICBsZXQgY29sbGlzaW9uT2NjdXJlZCA9IGNoZWNrRm9yQ29sbGlzaW9uKCk7XG4gICAgICAgIGdhbWVSdW5uaW5nID0gIWNvbGxpc2lvbk9jY3VyZWQ7XG5cbiAgICAgICAgY29uc3QgaGVhZCA9IHNuYWtlLmJvZHlbMF07XG4gICAgICAgIGlmIChpc1BhcnRPbkZvb2QoaGVhZCkpIHtcbiAgICAgICAgICAgIHNjb3JlKys7XG4gICAgICAgICAgICBsZXQgc2NvcmVTdHIgPSBTdHJpbmcoc2NvcmUgKiAxMDApO1xuICAgICAgICAgICAgc2NvcmVUYWcuaW5uZXJIVE1MID0gc2NvcmVTdHI7XG4gICAgICAgICAgICBmb29kID0gcmFuZG9taXplRm9vZCgpO1xuICAgICAgICAgICAgd2hpbGUgKGNoZWNrUGFydHNGb3JMb2NhdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgZm9vZCA9IHJhbmRvbWl6ZUZvb2QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNuYWtlLmFkZE5ld1BhcnQoKTtcbiAgICAgICAgICAgIGlmIChnYW1lU3BlZWQgPiAxNTApIHtcbiAgICAgICAgICAgICAgICBnYW1lU3BlZWQgLT0gKDAuMDIgKiAoc2NvcmUgKiAxMDApKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYW1lU3BlZWQpO1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZ2FtZUludGVydmFsKTtcbiAgICAgICAgICAgICAgICBnYW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnYW1lTG9vcCwgZ2FtZVNwZWVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lSW50ZXJ2YWwpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRHJhd3MgdGhlIHNuYWtlIGFuZCBmb29kIG9udG8gdGhlIGNhbnZhc1xuICogQHBhcmFtIHJ1bm5pbmdUaW1lIHByZWNpc2UgdGltZVxuICovXG5mdW5jdGlvbiBhbmltYXRpb24ocnVubmluZ1RpbWU6IG51bWJlcikge1xuICAgIGlmICghbGFzdERyYXcpIGxhc3REcmF3ID0gcnVubmluZ1RpbWU7XG4gICAgbGV0IGRpZmYgPSBydW5uaW5nVGltZSAtIGxhc3REcmF3O1xuXG4gICAgaWYgKGdhbWVSdW5uaW5nKSB7XG4gICAgICAgIGlmIChkaWZmIC8gZnBzID4gMSkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRyYXdGb29kKCk7XG4gICAgICAgICAgICBzbmFrZS5kcmF3KCk7XG4gICAgICAgICAgICBsYXN0RHJhdyA9IHJ1bm5pbmdUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU25ha2VQYXJ0IHtcblxuICAgIC8vIGFsc28gaGVpZ2h0XG4gICAgc3RhdGljIHJlYWRvbmx5IHBhcnRXaWR0aDogbnVtYmVyID0gMTA7XG5cbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGxhc3RYOiBudW1iZXI7XG4gICAgbGFzdFk6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG1vdmVzOiBvYmplY3RbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDJkOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAnKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dDJkO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIFNuYWtlUGFydC5wYXJ0V2lkdGgsIFNuYWtlUGFydC5wYXJ0V2lkdGgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTbmFrZVBhcnQgfSBmcm9tICcuL3NuYWtlLXBhcnQnO1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGJvZHk6IFNuYWtlUGFydFtdID0gW107XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IHN0cmluZyA9ICdkb3duJztcbiAgICBkaW1lbnNpb25zOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0MmQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZGltZW5zaW9uczogYW55LCBjb2xvcjogc3RyaW5nID0gJyMwMDAnKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dDJkO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIGNvbnN0IG5ld1BhcnQgPSBuZXcgU25ha2VQYXJ0KHRoaXMuY3R4LCAyMDAsIDEwMCwgdGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKG5ld1BhcnQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGZvciAobGV0IHNuYWtlUGFydCBvZiB0aGlzLmJvZHkpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC5kcmF3KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJvZHkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgc25ha2VQYXJ0ID0gdGhpcy5ib2R5W2luZGV4XTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaXJzdCBibG9jayhUaGUgaGVhZCksIGNoYW5nZXMgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIZWFkKHNuYWtlUGFydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSByZXN0XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYWlsKHNuYWtlUGFydCwgaW5kZXgsIHRoaXMuYm9keSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlYWQoc25ha2VQYXJ0OiBTbmFrZVBhcnQpIHtcbiAgICAgICAgY29uc3QgbmV3WCA9IHNuYWtlUGFydC54O1xuICAgICAgICBjb25zdCBuZXdZID0gc25ha2VQYXJ0Lnk7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WCA9IG5ld1g7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WSA9IG5ld1k7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgc25ha2VQYXJ0LnggPSBuZXdYICsgU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgICAgIGlmIChzbmFrZVBhcnQueCA+PSB0aGlzLmRpbWVuc2lvbnMueCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueCA9IG5ld1ggLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC54IDwgMCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC54ID0gdGhpcy5kaW1lbnNpb25zLnggLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC55ID0gbmV3WSArIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnkgPj0gdGhpcy5kaW1lbnNpb25zLnkpIHtcbiAgICAgICAgICAgICAgICBzbmFrZVBhcnQueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueSA9IG5ld1kgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC55ID0gdGhpcy5kaW1lbnNpb25zLnkgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWlsKHNuYWtlUGFydDogU25ha2VQYXJ0LCBpbmRleDogbnVtYmVyLCBib2R5OiBTbmFrZVBhcnRbXSkge1xuICAgICAgICAvLyBzYXZlIGxhc3QgbG9jYXRpb25cbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RYID0gc25ha2VQYXJ0Lng7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WSA9IHNuYWtlUGFydC55O1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHRoZSBwYXJ0IGluZnJvbnQgb2YgdGhpcyBvbmVzIGxhc3QgbG9jYXRpb25cbiAgICAgICAgc25ha2VQYXJ0LnggPSBib2R5W2luZGV4IC0gMV0ubGFzdFg7XG4gICAgICAgIHNuYWtlUGFydC55ID0gYm9keVtpbmRleCAtIDFdLmxhc3RZO1xuICAgIH1cblxuICAgIGFkZE5ld1BhcnQoKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgMSBibG9jayBhZGQgdGhlIG5ldyBwYXJ0IG9udG8gdGhlIGJhY2tcbiAgICAgICAgLy8gdXNpbmcgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIG9mIHNuYWtlIGFzIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgIGxldCBuZXdQYXJ0OiBTbmFrZVBhcnQgPSBudWxsO1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmJvZHkubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZUFkamFjZW50SGVhZFBhcnQobGFzdFBhcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVG9MYXN0ID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZU5ld1RhaWxQYXJ0KGxhc3RQYXJ0LCBzZWNvbmRUb0xhc3QpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1BhcnQuY29sb3IgPSAnb3JhbmdlJztcbiAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3UGFydCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBZGphY2VudEhlYWRQYXJ0KGxhc3RQYXJ0OiBTbmFrZVBhcnQpOiBTbmFrZVBhcnQge1xuICAgICAgICBsZXQgbmV3WCA9IGxhc3RQYXJ0Lng7XG4gICAgICAgIGxldCBuZXdZID0gbGFzdFBhcnQueTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBuZXdYIC09IFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbmV3WCArPSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIG5ld1kgLT0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1kgKz0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNuYWtlUGFydCh0aGlzLmN0eCwgbmV3WCwgbmV3WSwgdGhpcy5jb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdUYWlsUGFydChsYXN0UGFydDogU25ha2VQYXJ0LCBzZWNvbmRUb0xhc3Q6IFNuYWtlUGFydCk6IFNuYWtlUGFydCB7XG4gICAgICAgIGxldCBuZXdYID0gbGFzdFBhcnQueDtcbiAgICAgICAgbGV0IG5ld1kgPSBsYXN0UGFydC55O1xuICAgICAgICBjb25zdCBkaWZmWCA9IHNlY29uZFRvTGFzdC54IC0gbGFzdFBhcnQueDtcbiAgICAgICAgLy8gc2Vjb25kIHRvIGxhc3QgeCBpcyBncmVhdGVyIHRoYW4gbGFzdCB4IHdlIGFyZSBtb3ZpbmcgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGlmIChkaWZmWCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgbm90IGVxdWFsIHRvIDAgdGhhbiB3ZSBuZWVkIHRvIGFkZCBpdCBob3Jpem9udGFsbHlcbiAgICAgICAgICAgIG5ld1ggKz0gKE1hdGguc2lnbihkaWZmWCkgKiBTbmFrZVBhcnQucGFydFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWZmWSA9IHNlY29uZFRvTGFzdC55IC0gbGFzdFBhcnQueTtcbiAgICAgICAgaWYgKGRpZmZZICE9PSAwKSB7XG4gICAgICAgICAgICBuZXdZICs9IChNYXRoLnNpZ24oZGlmZlkpICogU25ha2VQYXJ0LnBhcnRXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFNuYWtlUGFydCh0aGlzLmN0eCwgbmV3WCwgbmV3WSwgdGhpcy5jb2xvcik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=