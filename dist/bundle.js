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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS1wYXJ0LnRzIiwid2VicGFjazovLy8uL3NyYy9zbmFrZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25FZ0M7QUFDUztBQUV6QyxNQUFNLFFBQVEsR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdELE1BQU0sR0FBRyxHQUE2QixRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUMvQixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO0FBQzdCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDL0IsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUs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QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLHFEQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcscURBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUkscURBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FDSiIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCB7IFNuYWtlIH0gZnJvbSBcIi4vc25ha2VcIjtcbmltcG9ydCB7IFNuYWtlUGFydCB9IGZyb20gXCIuL3NuYWtlLXBhcnRcIjtcblxuY29uc3QgY2FudmFzRWw6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXdpbmRvdycpO1xuY29uc3QgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjYW52YXNFbC5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3Qgc2NvcmVUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbmNvbnN0IGNlbnRlciA9IGNhbnZhc0VsLmhlaWdodDtcbmNvbnN0IHdpZHRoID0gY2FudmFzRWwud2lkdGg7XG5jb25zdCBoZWlnaHQgPSBjYW52YXNFbC5oZWlnaHQ7XG5jb25zdCBkaW0gPSB7IHg6IHdpZHRoLCB5OiBoZWlnaHQgfTtcbmNvbnN0IGZwcyA9IDEwMDAgLyAzMDtcbmNvbnN0IGdhbWVTcGVlZCA9IDIwMDtcbmxldCBnYW1lSW50ZXJ2YWw6IG51bWJlciA9IG51bGw7XG5sZXQgZ2FtZVJ1bm5pbmcgPSB0cnVlO1xubGV0IGxhc3RLZXlQcmVzc2VkID0gMzk7XG5sZXQgbGFzdERyYXc6IG51bWJlciA9IG51bGw7XG5sZXQgc25ha2UgPSBuZXcgU25ha2UoY3R4LCBkaW0pO1xubGV0IGZvb2QgPSByYW5kb21pemVGb29kKCk7XG5sZXQgc2NvcmUgPSAwO1xuXG5cbi8qKlxuICogRm9vZCBpcyBhbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIHRoZSB4IGFuZCB5IGxvY2F0aW9uIG9mIHRoZVxuICogZm9vZCBvYmplY3RcbiAqL1xuaW50ZXJmYWNlIEZvb2Qge1xuICAgIHg6IG51bWJlcixcbiAgICB5OiBudW1iZXJcbn1cblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcblxuICAgIHNldHVwQ29udHJvbHMoKTtcblxuICAgIC8vIGludGVydmFsIG9mIHRoZSBzbmFrZXMgbW92ZW1lbnRcbiAgICBnYW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnYW1lTG9vcCwgZ2FtZVNwZWVkKVxuXG4gICAgLy8gc3RhcnQgYW5pbWF0aW5nXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFZpYnJhdGVzIHBob25lIGlmIGF2YWlsYWJsZVxuICovXG5mdW5jdGlvbiB2aWJyYXRlKCkge1xuICAgIGlmIChuYXZpZ2F0b3IudmlicmF0ZSkge1xuICAgICAgICBuYXZpZ2F0b3IudmlicmF0ZSgxNTApO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRGV0ZXJtaW5lcyBpZiBtb2JpbGUgYnJvd3NlciBpcyBpbiB1c2VcbiAqIEByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAqL1xuZnVuY3Rpb24gbW9iaWxlQ2hlY2soKSB7XG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgKGZ1bmN0aW9uIChhKSB7IGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlOyB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IpO1xuICAgIHJldHVybiB0cnVlO1xuICAgIC8vIHJldHVybiBjaGVjaztcbn1cblxuZnVuY3Rpb24gc2V0dXBDb250cm9scygpIHtcbiAgICAvLyBkZXRlcm1pbmUgaWYgd2UgYXJlIGJlaW5nIHJ1biBvbiBtb2JpbGVcbiAgICBpZiAobW9iaWxlQ2hlY2soKSkge1xuICAgICAgICAvLyBzZXR1cCBidXR0b24gcHJlc3MgbGlzdGVuZXJzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cCcpLm9uY2xpY2sgPSAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZpYnJhdGUoKTtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbigzOCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xlZnQnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oMzcpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3duJykub25jbGljayA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgdmlicmF0ZSgpO1xuICAgICAgICAgICAgc2V0RGlyZWN0aW9uKDQwKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmlnaHQnKS5vbmNsaWNrID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2aWJyYXRlKCk7XG4gICAgICAgICAgICBzZXREaXJlY3Rpb24oMzkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzcGxheSBidXR0b25zIGZvciBkaXJlY3Rpb24gY29udHJvbHNcbiAgICAgICAgbGV0IGRpcmVjdGlvbkNvbnRyb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpcmVjdGlvbi1jb250cm9scycpO1xuICAgICAgICBkaXJlY3Rpb25Db250cm9scy5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2V0IHVwIGtleWJvYXJkIGxpc3RlbmVyc1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgbGV0IGtleSA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIHNldERpcmVjdGlvbihrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIFNldHMgdGhlIGxhc3QgcHJlc3NlZCBrZXlcbiAqIEBwYXJhbSBrZXkgS2V5Y29kZSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gc2V0RGlyZWN0aW9uKGtleTogbnVtYmVyKSB7XG4gICAgaWYgKGtleSA9PT0gNDAgfHxcbiAgICAgICAga2V5ID09PSAzOCB8fFxuICAgICAgICBrZXkgPT09IDM5IHx8XG4gICAgICAgIGtleSA9PT0gMzcpIHtcbiAgICAgICAgbGFzdEtleVByZXNzZWQgPSBrZXk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBWYWxpZGF0ZXMgdGhlIGxhc3QgcHJlc3NlZCBkaXJlY3Rpb24uIFxuICogVGhlIHNuYWtlIGNhbm5vdCBnbyBiYWNrd2FyZHMsIGZvciBleGFtcGxlIGlmIG1vdmluZyB1cCBpdCBjYW5ub3RcbiAqIG1vdmUgZG93biB3aXRob3V0IGZpcnN0IGdvaW5nIHRvIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZURpcmVjdGlvbkNoYW5nZSgpIHtcbiAgICBpZiAobGFzdEtleVByZXNzZWQgPT09IDQwKSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICd1cCcpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICdkb3duJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM4KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdkb3duJykge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gJ3VwJztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM5KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgc25ha2UuZGlyZWN0aW9uID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAobGFzdEtleVByZXNzZWQgPT09IDM3KSB7XG4gICAgICAgIGlmIChzbmFrZS5kaXJlY3Rpb24gIT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHNuYWtlLmRpcmVjdGlvbiA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gUmFuZG9taXplcyB0aGUgbG9jYXRpb24gb2YgdGhlIGZvb2QgYW5kIHJldHVybnMgYW4gb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIHJhbmRvbWl6ZUZvb2QoKTogRm9vZCB7XG4gICAgbGV0IGZvb2Q6IEZvb2QgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBsZXQgbmV3Rm9vZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3aWR0aCk7XG4gICAgbGV0IG5ld0Zvb2RZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaGVpZ2h0KTtcbiAgICBmb29kLnggPSBuZXdGb29kWCAtIChuZXdGb29kWCAlIDEwKSArIDU7XG4gICAgZm9vZC55ID0gbmV3Rm9vZFkgLSAobmV3Rm9vZFkgJSAxMCkgKyA1O1xuICAgIHJldHVybiBmb29kO1xufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDaGVja3MgaWYgdGhlIGhlYWQgb2YgdGhlIHNuYWtlIGlzIGluIHRoZVxuICogc2FtZSBsb2NhdGlvbiBhcyBhIHBhcnQgb2YgdGhlIGJvZHkuXG4gKiBAcmV0dXJucyB0cnVlIGlmIGNvbGxpc2lvbiwgZWxzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBjaGVja0ZvckNvbGxpc2lvbigpOiBib29sZWFuIHtcbiAgICBsZXQgaGVhZFggPSBzbmFrZS5ib2R5WzBdLng7XG4gICAgbGV0IGhlYWRZID0gc25ha2UuYm9keVswXS55O1xuICAgIHNuYWtlLmJvZHkuc2xpY2UoMSkubWFwKChzbmFrZVBhcnQsIGluZGV4LCBzbmFrZVBhcnRzKSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA+IDIgJiYgc25ha2VQYXJ0LnggPT09IGhlYWRYICYmIHNuYWtlUGFydC55ID09PSBoZWFkWSkge1xuICAgICAgICAgICAgLy8gY29sbGlzaW9uIGRldGVjdGVkXG4gICAgICAgICAgICBzbmFrZVBhcnQuY29sb3IgPSAncmVkJztcbiAgICAgICAgICAgIHNuYWtlUGFydC5kcmF3KCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ2hlY2tzIHRvbyBzZWUgaWYgdGhlIGZvb2QgaXMgd2l0aGluIHRoZSBoZWFkIGJsb2NrXG4gKiBAcmV0dXJucyB0cnVlIGlmIGZvb2Qgd2FzIGVhdGVuLCBlbHNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGhhc0VhdGVuRm9vZCgpOiBib29sZWFuIHtcbiAgICBsZXQgaGVhZCA9IHNuYWtlLmJvZHlbMF07XG4gICAgaWYgKChmb29kLnggPj0gaGVhZC54ICYmIGZvb2QueCA8PSBoZWFkLnggKyBTbmFrZVBhcnQucGFydFdpZHRoKVxuICAgICAgICAmJiAoZm9vZC55ID49IGhlYWQueSAmJiBmb29kLnkgPD0gaGVhZC55ICsgU25ha2VQYXJ0LnBhcnRXaWR0aCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gRHJhd3MgdGhlIGZvb2Qgb250byB0aGUgY2FudmFzXG4gKi9cbmZ1bmN0aW9uIGRyYXdGb29kKCkge1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgICBjdHguYXJjKGZvb2QueCwgZm9vZC55LCA0LCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIE1haW4gZ2FtZSBsb29wIGFuZCBhbmltYXRpb25cbiAqL1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgICAvLyBjaGVjayB0byBzZWUgaWYgdGhlIGxhc3Qga2V5IHByZXNzZWQgd2FzIGEgdmFsaWQga2V5IHByZXNzXG4gICAgLy8gaWUuIE5vdCBiYWNrd2FyZHNcbiAgICBpZiAoZ2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgdmFsaWRhdGVEaXJlY3Rpb25DaGFuZ2UoKTtcbiAgICAgICAgc25ha2UudXBkYXRlKCk7XG5cbiAgICAgICAgaWYgKGhhc0VhdGVuRm9vZCgpKSB7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgc2NvcmVUYWcuaW5uZXJIVE1MID0gU3RyaW5nKHNjb3JlKTtcbiAgICAgICAgICAgIGZvb2QgPSByYW5kb21pemVGb29kKCk7XG4gICAgICAgICAgICBzbmFrZS5hZGROZXdQYXJ0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiBjb2xsaXNpb24sIGNvbGxpc2lvbiB0YWtlcyBwbGFjZSBpZiB4IGFuZCB5IG9mIFxuICAgICAgICAvLyBoZWFkID09PSBhbnkgb3RoZXIgcGFydHMgeCBhbmQgeSAgXG4gICAgICAgIGxldCBjb2xsaXNpb25PY2N1cmVkID0gY2hlY2tGb3JDb2xsaXNpb24oKTtcbiAgICAgICAgZ2FtZVJ1bm5pbmcgPSAhY29sbGlzaW9uT2NjdXJlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhckludGVydmFsKGdhbWVJbnRlcnZhbCk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBEcmF3cyB0aGUgc25ha2UgYW5kIGZvb2Qgb250byB0aGUgY2FudmFzXG4gKiBAcGFyYW0gcnVubmluZ1RpbWUgcHJlY2lzZSB0aW1lXG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGlvbihydW5uaW5nVGltZTogbnVtYmVyKSB7XG4gICAgaWYgKCFsYXN0RHJhdykgbGFzdERyYXcgPSBydW5uaW5nVGltZTtcbiAgICBsZXQgZGlmZiA9IHJ1bm5pbmdUaW1lIC0gbGFzdERyYXc7XG5cbiAgICBpZiAoZ2FtZVJ1bm5pbmcpIHtcbiAgICAgICAgaWYgKGRpZmYgLyBmcHMgPiAxKSB7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsLndpZHRoLCBjYW52YXNFbC5oZWlnaHQpO1xuICAgICAgICAgICAgZHJhd0Zvb2QoKTtcbiAgICAgICAgICAgIHNuYWtlLmRyYXcoKTtcbiAgICAgICAgICAgIGxhc3REcmF3ID0gcnVubmluZ1RpbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBTbmFrZVBhcnQge1xuXG4gICAgLy8gYWxzbyBoZWlnaHRcbiAgICBzdGF0aWMgcmVhZG9ubHkgcGFydFdpZHRoOiBudW1iZXIgPSAxMDtcblxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgbGFzdFg6IG51bWJlcjtcbiAgICBsYXN0WTogbnVtYmVyO1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgbW92ZXM6IG9iamVjdFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0MmQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCcpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjb250ZXh0MmQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgU25ha2VQYXJ0LnBhcnRXaWR0aCwgU25ha2VQYXJ0LnBhcnRXaWR0aCk7XG4gICAgfVxufSIsImltcG9ydCB7IFNuYWtlUGFydCB9IGZyb20gJy4vc25ha2UtcGFydCc7XG5cbmV4cG9ydCBjbGFzcyBTbmFrZSB7XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgYm9keTogU25ha2VQYXJ0W10gPSBbXTtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIGRpcmVjdGlvbjogc3RyaW5nID0gJ2Rvd24nO1xuICAgIGRpbWVuc2lvbnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQyZDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBkaW1lbnNpb25zOiBhbnksIGNvbG9yOiBzdHJpbmcgPSAnIzAwMCcpIHtcbiAgICAgICAgdGhpcy5jdHggPSBjb250ZXh0MmQ7XG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IGRpbWVuc2lvbnM7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgY29uc3QgbmV3UGFydCA9IG5ldyBTbmFrZVBhcnQodGhpcy5jdHgsIDIwMCwgMTAwLCB0aGlzLmNvbG9yKTtcbiAgICAgICAgdGhpcy5ib2R5LnB1c2gobmV3UGFydCk7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5ib2R5Lm1hcCgoc25ha2VQYXJ0OiBTbmFrZVBhcnQsIGluZGV4OiBudW1iZXIsIHNuYWtlUGFydHM6IFNuYWtlUGFydFtdKSA9PiB7XG4gICAgICAgICAgICBzbmFrZVBhcnQuZHJhdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHRoaXMuYm9keS5tYXAoKHNuYWtlUGFydDogU25ha2VQYXJ0LCBpbmRleDogbnVtYmVyLCBzbmFrZVBhcnRzOiBTbmFrZVBhcnRbXSkgPT4ge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGZpcnN0IGJsb2NrKFRoZSBoZWFkKSwgY2hhbmdlcyBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUhlYWQoc25ha2VQYXJ0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHJlc3RcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRhaWwoc25ha2VQYXJ0LCBpbmRleCwgc25ha2VQYXJ0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlSGVhZChzbmFrZVBhcnQ6IFNuYWtlUGFydCkge1xuICAgICAgICBjb25zdCBuZXdYID0gc25ha2VQYXJ0Lng7XG4gICAgICAgIGNvbnN0IG5ld1kgPSBzbmFrZVBhcnQueTtcbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RYID0gbmV3WDtcbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RZID0gbmV3WTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBzbmFrZVBhcnQueCA9IG5ld1ggKyBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICAgICAgaWYgKHNuYWtlUGFydC54ID49IHRoaXMuZGltZW5zaW9ucy54KSB7XG4gICAgICAgICAgICAgICAgc25ha2VQYXJ0LnggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC54ID0gbmV3WCAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnggPCAwKSB7XG4gICAgICAgICAgICAgICAgc25ha2VQYXJ0LnggPSB0aGlzLmRpbWVuc2lvbnMueCAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgc25ha2VQYXJ0LnkgPSBuZXdZICsgU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgICAgIGlmIChzbmFrZVBhcnQueSA+PSB0aGlzLmRpbWVuc2lvbnMueSkge1xuICAgICAgICAgICAgICAgIHNuYWtlUGFydC55ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNuYWtlUGFydC55ID0gbmV3WSAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICBpZiAoc25ha2VQYXJ0LnkgPCAwKSB7XG4gICAgICAgICAgICAgICAgc25ha2VQYXJ0LnkgPSB0aGlzLmRpbWVuc2lvbnMueSAtIFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVRhaWwoc25ha2VQYXJ0OiBTbmFrZVBhcnQsIGluZGV4OiBudW1iZXIsIGJvZHk6IFNuYWtlUGFydFtdKSB7XG4gICAgICAgIC8vIHNhdmUgbGFzdCBsb2NhdGlvblxuICAgICAgICBzbmFrZVBhcnQubGFzdFggPSBzbmFrZVBhcnQueDtcbiAgICAgICAgc25ha2VQYXJ0Lmxhc3RZID0gc25ha2VQYXJ0Lnk7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdGhlIHBhcnQgaW5mcm9udCBvZiB0aGlzIG9uZXMgbGFzdCBsb2NhdGlvblxuICAgICAgICBzbmFrZVBhcnQueCA9IGJvZHlbaW5kZXggLSAxXS5sYXN0WDtcbiAgICAgICAgc25ha2VQYXJ0LnkgPSBib2R5W2luZGV4IC0gMV0ubGFzdFk7XG4gICAgfVxuXG4gICAgYWRkTmV3UGFydCgpIHtcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgb25seSAxIGJsb2NrIGFkZCB0aGUgbmV3IHBhcnQgb250byB0aGUgYmFja1xuICAgICAgICAvLyB1c2luZyB0aGUgY3VycmVudCBkaXJlY3Rpb24gb2Ygc25ha2UgYXMgZm9yd2FyZCBkaXJlY3Rpb25cbiAgICAgICAgbGV0IG5ld1BhcnQ6IFNuYWtlUGFydCA9IG51bGw7XG4gICAgICAgIGNvbnN0IGxhc3RQYXJ0ID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKHRoaXMuYm9keS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZUFkamFjZW50SGVhZFBhcnQobGFzdFBhcnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVG9MYXN0ID0gdGhpcy5ib2R5W3RoaXMuYm9keS5sZW5ndGggLSAyXTtcbiAgICAgICAgICAgIG5ld1BhcnQgPSB0aGlzLmNyZWF0ZU5ld1RhaWxQYXJ0KGxhc3RQYXJ0LCBzZWNvbmRUb0xhc3QpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGBBZGRpbmcgeDogJHtuZXdQYXJ0Lnh9LCB5OiAke25ld1BhcnQueX1gKTtcbiAgICAgICAgbmV3UGFydC5jb2xvciA9ICdvcmFuZ2UnO1xuICAgICAgICB0aGlzLmJvZHkucHVzaChuZXdQYXJ0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFkamFjZW50SGVhZFBhcnQobGFzdFBhcnQ6IFNuYWtlUGFydCk6IFNuYWtlUGFydCB7XG4gICAgICAgIGxldCBuZXdYID0gbGFzdFBhcnQueDtcbiAgICAgICAgbGV0IG5ld1kgPSBsYXN0UGFydC55O1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIG5ld1ggLT0gU25ha2VQYXJ0LnBhcnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBuZXdYICs9IFNuYWtlUGFydC5wYXJ0V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgbmV3WSAtPSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3WSArPSBTbmFrZVBhcnQucGFydFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgU25ha2VQYXJ0KHRoaXMuY3R4LCBuZXdYLCBuZXdZLCB0aGlzLmNvbG9yKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZU5ld1RhaWxQYXJ0KGxhc3RQYXJ0OiBTbmFrZVBhcnQsIHNlY29uZFRvTGFzdDogU25ha2VQYXJ0KTogU25ha2VQYXJ0IHtcbiAgICAgICAgbGV0IG5ld1ggPSBsYXN0UGFydC54O1xuICAgICAgICBsZXQgbmV3WSA9IGxhc3RQYXJ0Lnk7XG4gICAgICAgIGNvbnN0IGRpZmZYID0gc2Vjb25kVG9MYXN0LnggLSBsYXN0UGFydC54O1xuICAgICAgICAvLyBzZWNvbmQgdG8gbGFzdCB4IGlzIGdyZWF0ZXIgdGhhbiBsYXN0IHggd2UgYXJlIG1vdmluZyB0byB0aGUgcmlnaHRcbiAgICAgICAgaWYgKGRpZmZYICE9PSAwKSB7XG4gICAgICAgICAgICAvLyBpZiBub3QgZXF1YWwgdG8gMCB0aGFuIHdlIG5lZWQgdG8gYWRkIGl0IGhvcml6b250YWxseVxuICAgICAgICAgICAgbmV3WCArPSAoTWF0aC5zaWduKGRpZmZYKSAqIFNuYWtlUGFydC5wYXJ0V2lkdGgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRpZmZZID0gc2Vjb25kVG9MYXN0LnkgLSBsYXN0UGFydC55O1xuICAgICAgICBpZiAoZGlmZlkgIT09IDApIHtcbiAgICAgICAgICAgIG5ld1kgKz0gKE1hdGguc2lnbihkaWZmWSkgKiBTbmFrZVBhcnQucGFydFdpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgU25ha2VQYXJ0KHRoaXMuY3R4LCBuZXdYLCBuZXdZLCB0aGlzLmNvbG9yKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==