import { Point } from "./animator/src/models"
import { keyNames, Key } from "./animator/src/keyboard/index"

const FPS = 30;
const CANVAS_ID = 'game-window';
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

let INITIAL_GAME_SPEED = 500;
const GAME_SPEED_DELTA = 25;
const GAME_SPEED_LIMIT: number = 75;

export { FPS, CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT, INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT };