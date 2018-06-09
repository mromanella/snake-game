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
const gameSpeed = 200;
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
        navigator.vibrate(150);
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
    return true;
    // return check;
}
function setupControls() {
    // determine if we are being run on mobile
    if (mobileCheck()) {
        // setup button press listeners
        document.getElementById('up').onclick = (e) => {
            setDirection(38);
        };
        document.getElementById('left').onclick = (e) => {
            setDirection(37);
        };
        document.getElementById('down').onclick = (e) => {
            setDirection(40);
        };
        document.getElementById('right').onclick = (e) => {
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
    let headX = snake.body[0].x;
    let headY = snake.body[0].y;
    snake.body.slice(1).map((snakePart, index, snakeParts) => {
        if (index > 2 && snakePart.x === headX && snakePart.y === headY) {
            // collision detected
            snakePart.color = 'red';
            snakePart.draw();
            return true;
        }
    });
    return false;
}
/**
 * @description Checks too see if the food is within the head block
 * @returns true if food was eaten, else false
 */
function hasEatenFood() {
    let head = snake.body[0];
    if ((food.x >= head.x && food.x <= head.x + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)
        && (food.y >= head.y && food.y <= head.y + _snake_part__WEBPACK_IMPORTED_MODULE_1__["SnakePart"].partWidth)) {
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
 * @description Main game loop and animation
 */
function gameLoop() {
    // check to see if the last key pressed was a valid key press
    // ie. Not backwards
    if (gameRunning) {
        validateDirectionChange();
        snake.update();
        if (hasEatenFood()) {
            score++;
            scoreTag.innerHTML = String(score);
            food = randomizeFood();
            snake.addNewPart();
        }
        // check if collision, collision takes place if x and y of 
        // head === any other parts x and y  
        let collisionOccured = checkForCollision();
        gameRunning = !collisionOccured;
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
        this.body.map((snakePart, index, snakeParts) => {
            snakePart.draw();
        });
    }
    update() {
        this.body.map((snakePart, index, snakeParts) => {
            if (index === 0) {
                // update first block(The head), changes direction
                this.updateHead(snakePart);
            }
            else {
                // updating the rest
                this.updateTail(snakePart, index, snakeParts);
            }
        });
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
        if (this.body.length === 1) {
            newPart = this.createAdjacentHeadPart(lastPart);
        }
        else {
            const secondToLast = this.body[this.body.length - 2];
            newPart = this.createNewTailPart(lastPart, secondToLast);
        }
        console.log(`Adding x: ${newPart.x}, y: ${newPart.y}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS1wYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FZ0M7QUFDUztBQUV6QyxNQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdELE1BQU0sR0FBRyxHQUE2QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUs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QUFNLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLHFEQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLHFEQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0oiLCJmaWxlIjoiLi9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBTbmFrZSB9IGZyb20gXCIuL3NuYWtlXCI7XG5pbXBvcnQgeyBTbmFrZVBhcnQgfSBmcm9tIFwiLi9zbmFrZS1wYXJ0XCI7XG5cbmNvbnN0IGNhbnZhc0VsOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS13aW5kb3cnKTtcbmNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzRWwuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IHNjb3JlVGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njb3JlJyk7XG5jb25zdCBjZW50ZXIgPSBjYW52YXNFbC5oZWlnaHQ7XG5jb25zdCB3aWR0aCA9IGNhbnZhc0VsLndpZHRoO1xuY29uc3QgaGVpZ2h0ID0gY2FudmFzRWwuaGVpZ2h0O1xuY29uc3QgZGltID0geyB4OiB3aWR0aCwgeTogaGVpZ2h0IH07XG5jb25zdCBmcHMgPSAxMDAwIC8gMzA7XG5jb25zdCBnYW1lU3BlZWQgPSAyMDA7XG5sZXQgZ2FtZUludGVydmFsOiBudW1iZXIgPSBudWxsO1xubGV0IGdhbWVSdW5uaW5nID0gdHJ1ZTtcbmxldCBsYXN0S2V5UHJlc3NlZCA9IDM5O1xubGV0IGxhc3REcmF3OiBudW1iZXIgPSBudWxsO1xubGV0IHNuYWtlID0gbmV3IFNuYWtlKGN0eCwgZGltKTtcbmxldCBmb29kID0gcmFuZG9taXplRm9vZCgpO1xubGV0IHNjb3JlID0gMDtcblxuXG4vKipcbiAqIEZvb2QgaXMgYW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyB0aGUgeCBhbmQgeSBsb2NhdGlvbiBvZiB0aGVcbiAqIGZvb2Qgb2JqZWN0XG4gKi9cbmludGVyZmFjZSBGb29kIHtcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyXG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG5cbiAgICBzZXR1cENvbnRyb2xzKCk7XG5cbiAgICAvLyBpbnRlcnZhbCBvZiB0aGUgc25ha2VzIG1vdmVtZW50XG4gICAgZ2FtZUludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2FtZUxvb3AsIGdhbWVTcGVlZClcblxuICAgIC8vIHN0YXJ0IGFuaW1hdGluZ1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyBwaG9uZSBpZiBhdmFpbGFibGVcbiAqL1xuZnVuY3Rpb24gdmlicmF0ZSgpIHtcbiAgICBpZiAobmF2aWdhdG9yLnZpYnJhdGUpIHtcbiAgICAgICAgbmF2aWdhdG9yLnZpYnJhdGUoMTUwKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIERldGVybWluZXMgaWYgbW9iaWxlIGJyb3dzZXIgaXMgaW4gdXNlXG4gKiBAcmV0dXJucyB0cnVlIG9yIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIG1vYmlsZUNoZWNrKCkge1xuICAgIHZhciBjaGVjayA9IGZhbHNlO1xuICAgIChmdW5jdGlvbiAoYSkgeyBpZiAoLyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpIGNoZWNrID0gdHJ1ZTsgfSkobmF2aWdhdG9yLnVzZXJBZ2VudCB8fCBuYXZpZ2F0b3IudmVuZG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICAvLyByZXR1cm4gY2hlY2s7XG59XG5cbmZ1bmN0aW9uIHNldHVwQ29udHJvbHMoKSB7XG4gICAgLy8gZGV0ZXJtaW5lIGlmIHdlIGFyZSBiZWluZyBydW4gb24gbW9iaWxlXG4gICAgaWYgKG1vYmlsZUNoZWNrKCkpIHtcbiAgICAgICAgLy8gc2V0dXAgYnV0dG9uIHByZXNzIGxpc3RlbmVyc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXAnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oMzgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsZWZ0Jykub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKDM3KTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG93bicpLm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbig0MCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JpZ2h0Jykub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKDM5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRpc3BsYXkgYnV0dG9ucyBmb3IgZGlyZWN0aW9uIGNvbnRyb2xzXG4gICAgICAgIGxldCBkaXJlY3Rpb25Db250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXJlY3Rpb24tY29udHJvbHMnKTtcbiAgICAgICAgZGlyZWN0aW9uQ29udHJvbHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHNldCB1cCBrZXlib2FyZCBsaXN0ZW5lcnNcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBrZXkgPSBlLmtleUNvZGU7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBTZXRzIHRoZSBsYXN0IHByZXNzZWQga2V5XG4gKiBAcGFyYW0ga2V5IEtleWNvZGUgbnVtYmVyXG4gKi9cbmZ1bmN0aW9uIHNldERpcmVjdGlvbihrZXk6IG51bWJlcikge1xuICAgIGlmIChrZXkgPT09IDQwIHx8XG4gICAgICAgIGtleSA9PT0gMzggfHxcbiAgICAgICAga2V5ID09PSAzOSB8fFxuICAgICAgICBrZXkgPT09IDM3KSB7XG4gICAgICAgIGxhc3RLZXlQcmVzc2VkID0ga2V5O1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVmFsaWRhdGVzIHRoZSBsYXN0IHByZXNzZWQgZGlyZWN0aW9uLiBcbiAqIFRoZSBzbmFrZSBjYW5ub3QgZ28gYmFja3dhcmRzLCBmb3IgZXhhbXBsZSBpZiBtb3ZpbmcgdXAgaXQgY2Fubm90XG4gKiBtb3ZlIGRvd24gd2l0aG91dCBmaXJzdCBnb2luZyB0byBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVEaXJlY3Rpb25DaGFuZ2UoKSB7XG4gICAgaWYgKGxhc3RLZXlQcmVzc2VkID09PSA0MCkge1xuICAgICAgICBpZiAoc25ha2UuZGlyZWN0aW9uICE9PSAndXAnKSB7XG4gICAgICAgICAgICBzbmFrZS5kaXJlY3Rpb24gPSAnZG93bic7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhc3RLZXlQcmVzc2VkID09PSAzOCkge1xuICAgICAgICBpZiAoc25ha2UuZGlyZWN0aW9uICE9PSAnZG93bicpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICd1cCc7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhc3RLZXlQcmVzc2VkID09PSAzOSkge1xuICAgICAgICBpZiAoc25ha2UuZGlyZWN0aW9uICE9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICdyaWdodCc7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGxhc3RLZXlQcmVzc2VkID09PSAzNykge1xuICAgICAgICBpZiAoc25ha2UuZGlyZWN0aW9uICE9PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBzbmFrZS5kaXJlY3Rpb24gPSAnbGVmdCc7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFJhbmRvbWl6ZXMgdGhlIGxvY2F0aW9uIG9mIHRoZSBmb29kIGFuZCByZXR1cm5zIGFuIG9iamVjdFxuICovXG5mdW5jdGlvbiByYW5kb21pemVGb29kKCk6IEZvb2Qge1xuICAgIGxldCBmb29kOiBGb29kID0geyB4OiAwLCB5OiAwIH07XG4gICAgbGV0IG5ld0Zvb2RYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2lkdGgpO1xuICAgIGxldCBuZXdGb29kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhlaWdodCk7XG4gICAgZm9vZC54ID0gbmV3Rm9vZFggLSAobmV3Rm9vZFggJSAxMCkgKyA1O1xuICAgIGZvb2QueSA9IG5ld0Zvb2RZIC0gKG5ld0Zvb2RZICUgMTApICsgNTtcbiAgICByZXR1cm4gZm9vZDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIGlmIHRoZSBoZWFkIG9mIHRoZSBzbmFrZSBpcyBpbiB0aGVcbiAqIHNhbWUgbG9jYXRpb24gYXMgYSBwYXJ0IG9mIHRoZSBib2R5LlxuICogQHJldHVybnMgdHJ1ZSBpZiBjb2xsaXNpb24sIGVsc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2hlY2tGb3JDb2xsaXNpb24oKTogYm9vbGVhbiB7XG4gICAgbGV0IGhlYWRYID0gc25ha2UuYm9keVswXS54O1xuICAgIGxldCBoZWFkWSA9IHNuYWtlLmJvZHlbMF0ueTtcbiAgICBzbmFrZS5ib2R5LnNsaWNlKDEpLm1hcCgoc25ha2VQYXJ0LCBpbmRleCwgc25ha2VQYXJ0cykgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPiAyICYmIHNuYWtlUGFydC54ID09PSBoZWFkWCAmJiBzbmFrZVBhcnQueSA9PT0gaGVhZFkpIHtcbiAgICAgICAgICAgIC8vIGNvbGxpc2lvbiBkZXRlY3RlZFxuICAgICAgICAgICAgc25ha2VQYXJ0LmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICBzbmFrZVBhcnQuZHJhdygpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENoZWNrcyB0b28gc2VlIGlmIHRoZSBmb29kIGlzIHdpdGhpbiB0aGUgaGVhZCBibG9ja1xuICogQHJldHVybnMgdHJ1ZSBpZiBmb29kIHdhcyBlYXRlbiwgZWxzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNFYXRlbkZvb2QoKTogYm9vbGVhbiB7XG4gICAgbGV0IGhlYWQgPSBzbmFrZS5ib2R5WzBdO1xuICAgIGlmICgoZm9vZC54ID49IGhlYWQueCAmJiBmb29kLnggPD0gaGVhZC54ICsgU25ha2VQYXJ0LnBhcnRXaWR0aClcbiAgICAgICAgJiYgKGZvb2QueSA+PSBoZWFkLnkgJiYgZm9vZC55IDw9IGhlYWQueSArIFNuYWtlUGFydC5wYXJ0V2lkdGgpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIERyYXdzIHRoZSBmb29kIG9udG8gdGhlIGNhbnZhc1xuICovXG5mdW5jdGlvbiBkcmF3Rm9vZCgpIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmFyYyhmb29kLngsIGZvb2QueSwgNCwgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICBjdHguZmlsbCgpO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBNYWluIGdhbWUgbG9vcCBhbmQgYW5pbWF0aW9uXG4gKi9cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gICAgLy8gY2hlY2sgdG8gc2VlIGlmIHRoZSBsYXN0IGtleSBwcmVzc2VkIHdhcyBhIHZhbGlkIGtleSBwcmVzc1xuICAgIC8vIGllLiBOb3QgYmFja3dhcmRzXG4gICAgaWYgKGdhbWVSdW5uaW5nKSB7XG4gICAgICAgIHZhbGlkYXRlRGlyZWN0aW9uQ2hhbmdlKCk7XG4gICAgICAgIHNuYWtlLnVwZGF0ZSgpO1xuXG4gICAgICAgIGlmIChoYXNFYXRlbkZvb2QoKSkge1xuICAgICAgICAgICAgc2NvcmUrKztcbiAgICAgICAgICAgIHNjb3JlVGFnLmlubmVySFRNTCA9IFN0cmluZyhzY29yZSk7XG4gICAgICAgICAgICBmb29kID0gcmFuZG9taXplRm9vZCgpO1xuICAgICAgICAgICAgc25ha2UuYWRkTmV3UGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgY29sbGlzaW9uLCBjb2xsaXNpb24gdGFrZXMgcGxhY2UgaWYgeCBhbmQgeSBvZiBcbiAgICAgICAgLy8gaGVhZCA9PT0gYW55IG90aGVyIHBhcnRzIHggYW5kIHkgIFxuICAgICAgICBsZXQgY29sbGlzaW9uT2NjdXJlZCA9IGNoZWNrRm9yQ29sbGlzaW9uKCk7XG4gICAgICAgIGdhbWVSdW5uaW5nID0gIWNvbGxpc2lvbk9jY3VyZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lSW50ZXJ2YWwpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRHJhd3MgdGhlIHNuYWtlIGFuZCBmb29kIG9udG8gdGhlIGNhbnZhc1xuICogQHBhcmFtIHJ1bm5pbmdUaW1lIHByZWNpc2UgdGltZVxuICovXG5mdW5jdGlvbiBhbmltYXRpb24ocnVubmluZ1RpbWU6IG51bWJlcikge1xuICAgIGlmICghbGFzdERyYXcpIGxhc3REcmF3ID0gcnVubmluZ1RpbWU7XG4gICAgbGV0IGRpZmYgPSBydW5uaW5nVGltZSAtIGxhc3REcmF3O1xuXG4gICAgaWYgKGdhbWVSdW5uaW5nKSB7XG4gICAgICAgIGlmIChkaWZmIC8gZnBzID4gMSkge1xuICAgICAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXNFbC53aWR0aCwgY2FudmFzRWwuaGVpZ2h0KTtcbiAgICAgICAgICAgIGRyYXdGb29kKCk7XG4gICAgICAgICAgICBzbmFrZS5kcmF3KCk7XG4gICAgICAgICAgICBsYXN0RHJhdyA9IHJ1bm5pbmdUaW1lO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgU25ha2VQYXJ0IHtcblxuICAgIC8vIGFsc28gaGVpZ2h0XG4gICAgc3RhdGljIHJlYWRvbmx5IHBhcnRXaWR0aDogbnVtYmVyID0gMTA7XG5cbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGxhc3RYOiBudW1iZXI7XG4gICAgbGFzdFk6IG51bWJlcjtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG1vdmVzOiBvYmplY3RbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dDJkOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gJyMwMDAnKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dDJkO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIFNuYWtlUGFydC5wYXJ0V2lkdGgsIFNuYWtlUGFydC5wYXJ0V2lkdGgpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTbmFrZVBhcnQgfSBmcm9tICcuL3NuYWtlLXBhcnQnO1xuXG5leHBvcnQgY2xhc3MgU25ha2Uge1xuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIGJvZHk6IFNuYWtlUGFydFtdID0gW107XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBkaXJlY3Rpb246IHN0cmluZyA9ICdkb3duJztcbiAgICBkaW1lbnNpb25zOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0MmQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZGltZW5zaW9uczogYW55LCBjb2xvcjogc3RyaW5nID0gJyMwMDAnKSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY29udGV4dDJkO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIGNvbnN0IG5ld1BhcnQgPSBuZXcgU25ha2VQYXJ0KHRoaXMuY3R4LCAyMDAsIDEwMCwgdGhpcy5jb2xvcik7XG4gICAgICAgIHRoaXMuYm9keS5wdXNoKG5ld1BhcnQpO1xuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuYm9keS5tYXAoKHNuYWtlUGFydDogU25ha2VQYXJ0LCBpbmRleDogbnVtYmVyLCBzbmFrZVBhcnRzOiBTbmFrZVBhcnRbXSkgPT4ge1xuICAgICAgICAgICAgc25ha2VQYXJ0LmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICB0aGlzLmJvZHkubWFwKChzbmFrZVBhcnQ6IFNuYWtlUGFydCwgaW5kZXg6IG51bWJlciwgc25ha2VQYXJ0czogU25ha2VQYXJ0W10pID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBmaXJzdCBibG9jayhUaGUgaGVhZCksIGNoYW5nZXMgZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIZWFkKHNuYWtlUGFydCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSByZXN0XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUYWlsKHNuYWtlUGFydCwgaW5kZXgsIHNuYWtlUGFydHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZUhlYWQoc25ha2VQYXJ0OiBTbmFrZVBhcnQpIHtcbiAgICAgICAgY29uc3QgbmV3WCA9IHNuYWtlUGFydC54O1xuICAgICAgICBjb25zdCBuZXdZID0gc25ha2VQYXJ0Lnk7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WCA9IG5ld1g7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WSA9IG5ld1k7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgc25ha2VQYXJ0LnggPSBuZXdYICsgU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgICAgIGlmIChzbmFrZVBhcnQueCA+PSB0aGlzLmRpbWVuc2lvbnMueCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueCA9IG5ld1ggLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC54IDwgMCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC54ID0gdGhpcy5kaW1lbnNpb25zLnggLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC55ID0gbmV3WSArIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnkgPj0gdGhpcy5kaW1lbnNpb25zLnkpIHtcbiAgICAgICAgICAgICAgICBzbmFrZVBhcnQueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueSA9IG5ld1kgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC55IDwgMCkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC55ID0gdGhpcy5kaW1lbnNpb25zLnkgLSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWlsKHNuYWtlUGFydDogU25ha2VQYXJ0LCBpbmRleDogbnVtYmVyLCBib2R5OiBTbmFrZVBhcnRbXSkge1xuICAgICAgICAvLyBzYXZlIGxhc3QgbG9jYXRpb25cbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RYID0gc25ha2VQYXJ0Lng7XG4gICAgICAgIHNuYWtlUGFydC5sYXN0WSA9IHNuYWtlUGFydC55O1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHRoZSBwYXJ0IGluZnJvbnQgb2YgdGhpcyBvbmVzIGxhc3QgbG9jYXRpb25cbiAgICAgICAgc25ha2VQYXJ0LnggPSBib2R5W2luZGV4IC0gMV0ubGFzdFg7XG4gICAgICAgIHNuYWtlUGFydC55ID0gYm9keVtpbmRleCAtIDFdLmxhc3RZO1xuICAgIH1cblxuICAgIGFkZE5ld1BhcnQoKSB7XG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIG9ubHkgMSBibG9jayBhZGQgdGhlIG5ldyBwYXJ0IG9udG8gdGhlIGJhY2tcbiAgICAgICAgLy8gdXNpbmcgdGhlIGN1cnJlbnQgZGlyZWN0aW9uIG9mIHNuYWtlIGFzIGZvcndhcmQgZGlyZWN0aW9uXG4gICAgICAgIGxldCBuZXdQYXJ0OiBTbmFrZVBhcnQgPSBudWxsO1xuICAgICAgICBjb25zdCBsYXN0UGFydCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLmJvZHkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBuZXdQYXJ0ID0gdGhpcy5jcmVhdGVBZGphY2VudEhlYWRQYXJ0KGxhc3RQYXJ0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFRvTGFzdCA9IHRoaXMuYm9keVt0aGlzLmJvZHkubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICBuZXdQYXJ0ID0gdGhpcy5jcmVhdGVOZXdUYWlsUGFydChsYXN0UGFydCwgc2Vjb25kVG9MYXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhgQWRkaW5nIHg6ICR7bmV3UGFydC54fSwgeTogJHtuZXdQYXJ0Lnl9YCk7XG4gICAgICAgIG5ld1BhcnQuY29sb3IgPSAnb3JhbmdlJztcbiAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3UGFydCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBZGphY2VudEhlYWRQYXJ0KGxhc3RQYXJ0OiBTbmFrZVBhcnQpOiBTbmFrZVBhcnQge1xuICAgICAgICBsZXQgbmV3WCA9IGxhc3RQYXJ0Lng7XG4gICAgICAgIGxldCBuZXdZID0gbGFzdFBhcnQueTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBuZXdYIC09IFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbmV3WCArPSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIG5ld1kgLT0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1kgKz0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFNuYWtlUGFydCh0aGlzLmN0eCwgbmV3WCwgbmV3WSwgdGhpcy5jb2xvcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdUYWlsUGFydChsYXN0UGFydDogU25ha2VQYXJ0LCBzZWNvbmRUb0xhc3Q6IFNuYWtlUGFydCk6IFNuYWtlUGFydCB7XG4gICAgICAgIGxldCBuZXdYID0gbGFzdFBhcnQueDtcbiAgICAgICAgbGV0IG5ld1kgPSBsYXN0UGFydC55O1xuICAgICAgICBjb25zdCBkaWZmWCA9IHNlY29uZFRvTGFzdC54IC0gbGFzdFBhcnQueDtcbiAgICAgICAgLy8gc2Vjb25kIHRvIGxhc3QgeCBpcyBncmVhdGVyIHRoYW4gbGFzdCB4IHdlIGFyZSBtb3ZpbmcgdG8gdGhlIHJpZ2h0XG4gICAgICAgIGlmIChkaWZmWCAhPT0gMCkge1xuICAgICAgICAgICAgLy8gaWYgbm90IGVxdWFsIHRvIDAgdGhhbiB3ZSBuZWVkIHRvIGFkZCBpdCBob3Jpem9udGFsbHlcbiAgICAgICAgICAgIG5ld1ggKz0gKE1hdGguc2lnbihkaWZmWCkgKiBTbmFrZVBhcnQucGFydFdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkaWZmWSA9IHNlY29uZFRvTGFzdC55IC0gbGFzdFBhcnQueTtcbiAgICAgICAgaWYgKGRpZmZZICE9PSAwKSB7XG4gICAgICAgICAgICBuZXdZICs9IChNYXRoLnNpZ24oZGlmZlkpICogU25ha2VQYXJ0LnBhcnRXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IFNuYWtlUGFydCh0aGlzLmN0eCwgbmV3WCwgbmV3WSwgdGhpcy5jb2xvcik7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=