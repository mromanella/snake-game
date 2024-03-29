const FPS = 30;
const CANVAS_ID = '#game-window';
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = CANVAS_WIDTH;
const PART_WIDTH = 20;
const FOOD_OFFSET = 10;
const FOOD_RADIUS = 7;

const SINGLEPLAYER = 'singleplayer';

let INITIAL_GAME_SPEED = 350;
const GAME_SPEED_DELTA = 5;
const GAME_SPEED_LIMIT: number = 50;
const GAME_SPEEDS = [350, 250, 150, 100, 50];

const BG_MUSIC_SPEEDS = [1, 1.25, 1.5, 1.75, 2];

const PLAYER_MAX_SPEED_EVENT = 'playerMaxSpeed';
const PLAYER_DEATH_EVENT = 'playerDeath';
const FOOD_PICKUP = 'food-pickup';
const GAME_FINISH_EVENT = 'gameFinish';

const MENU_HOVER = 'menu-hover';
const MENU_CLICK = 'menu-click';
const BG_MUSIC = 'bg-music';

export {
    FPS, CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT,
    PART_WIDTH, INITIAL_GAME_SPEED, GAME_SPEED_DELTA, GAME_SPEED_LIMIT,
    FOOD_OFFSET, PLAYER_MAX_SPEED_EVENT, PLAYER_DEATH_EVENT, GAME_FINISH_EVENT,
    GAME_SPEEDS, SINGLEPLAYER,
    MENU_HOVER,
    MENU_CLICK,
    FOOD_PICKUP,
    BG_MUSIC,
    BG_MUSIC_SPEEDS,
    FOOD_RADIUS
};
