const FPS = 30;
const CANVAS_ID = 'game-window';
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const PART_WIDTH = 10;
const FOOD_OFFSET = 5;

let INITIAL_GAME_SPEED = 300;
const GAME_SPEED_DELTA = 10;
const GAME_SPEED_LIMIT: number = 30;
const GAME_SPEEDS = [-1, 300, 200, 100, 50, 25];

const PLAYER_MAX_SPEED_EVENT = 'playerMaxSpeed';
const PLAYER_DEATH_EVENT = 'playerDeath';
const GAME_FINISH_EVENT = 'gameFinish';

export {
    FPS, CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT,
    PART_WIDTH, INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT,
    FOOD_OFFSET, PLAYER_MAX_SPEED_EVENT, PLAYER_DEATH_EVENT, GAME_FINISH_EVENT,
    GAME_SPEEDS
};
