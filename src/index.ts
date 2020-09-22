import "./index.css";
import { Game, Options } from "./game";
import { setTopScoreText, setOptions, showNotification } from "./utils";
import { getKeyboardController, Key, keyNames } from "./animator/src/keyboard/index";
import { register } from "./animator/src/events";
import { GAME_FINISH_EVENT, MULTIPLAYER, SINGLEPLAYER } from "./constants";
import { getTopScore, saveTopScore, getOptions, saveOptions } from "./db";
import { elements } from "./animator/index";

// Get ref to all menu items
const mainMenuEl: HTMLElement = document.querySelector('#main-menu');

const gameOptionsEl: HTMLElement = document.querySelector('#options');
const startingSpeedEl: HTMLSelectElement = document.querySelector('#startingSpeed');
const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
const displayGridEl: HTMLSelectElement = document.querySelector('#displayGrid');
const playButtonEl: HTMLElement = document.querySelector('#play-button');

const rulesEl: HTMLSelectElement = document.querySelector('#info');

const playAreaEl: HTMLSelectElement = document.querySelector('#play-area');

const goBackButtonEl: HTMLSelectElement = document.querySelector('#go-back-button');
const gameFinishedEl: HTMLElement = document.querySelector('#game-finished-section');
const restartButtonEl: HTMLElement = document.querySelector('#restart-button');
const mainMenuButtonGameFinishedEl: HTMLElement = document.querySelector('#main-menu-button-game-finished');
const mainMenuButtonPausedEl: HTMLElement = document.querySelector('#main-menu-button-paused');

const pausedSectionEl: HTMLSelectElement = document.querySelector('#paused-section');

let currentScreen = mainMenuEl;
let previousScreen = mainMenuEl;
let playerMode = SINGLEPLAYER;

goBackButtonEl.addEventListener('click', () => {
    transitionScreen(currentScreen, previousScreen);
});

function transitionScreen(from: HTMLElement, to: HTMLElement, showBack: boolean = false) {
    elements.slideOutTop(from);
    elements.slideInTop(to);
    previousScreen = from;
    currentScreen = to;
    if (showBack) {
        setTimeout(elements.showElement, 800, goBackButtonEl);
    } else {
        elements.hideElement(goBackButtonEl);
    }
}

function toOptions(from: HTMLElement) {
    getOptions(playerMode).onsuccess = (event: any) => {
        const options = event.target.result.options;
        setOptions(options);
    };
    transitionScreen(from, gameOptionsEl, true);
}

function toMainMenu(from: HTMLElement) {
    transitionScreen(from, mainMenuEl);
}

restartButtonEl.addEventListener('click', () => {
    elements.hideElement(gameFinishedEl);
    playButtonEl.click();
})

mainMenuButtonGameFinishedEl.addEventListener('click', () => {
    elements.hideElement(gameFinishedEl);
    toMainMenu(currentScreen);
})
mainMenuButtonPausedEl.addEventListener('click', () => {
    elements.hideElement(pausedSectionEl);
    toMainMenu(currentScreen);
})

playButtonEl.addEventListener('click', () => {
    const options: Options = {
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false,
        displayGrid: displayGridEl.value === 'true' ? true : false,
        startingSpeed: Number(startingSpeedEl.value)
    }
    saveOptions(playerMode, options);

    const game = new Game(playerMode, options);

    const kbController = getKeyboardController();
    const pKey = new Key(keyNames.P, [() => {
        togglePause(game);
    }]);
    kbController.addKey(pKey)

    register(GAME_FINISH_EVENT, onFinish, game, pKey);

    transitionScreen(currentScreen, playAreaEl);
    game.start();
})

document.getElementById('info-button').addEventListener('click', (event: MouseEvent) => {
    transitionScreen(mainMenuEl, rulesEl, true);
})

function togglePause(game: Game) {
    if (game.running) {
        game.pause();
        elements.showElement(pausedSectionEl);
    } else {
        elements.hideElement(pausedSectionEl);
        game.resume();
    }
}

function onFinish(game: Game, pKey: Key) {
    if (!game.isMultiplayer()) {
        getTopScore().onsuccess = (event: any) => {
            const highScore = event.target.result['score'];
            const score = game.player1.score;
            if (score > highScore) {
                saveTopScore(score);
                setTopScoreText(score);
                showNotification('New top score!');
            }
        }
    }
    game.pause();
    pKey.setLocked(true);
    elements.showElement(gameFinishedEl);
}

// Game starts here
document.getElementById('singleplayer-button').addEventListener('click', (event: MouseEvent) => {
    playerMode = SINGLEPLAYER;
    toOptions(mainMenuEl);
})

document.getElementById('multiplayer-button').addEventListener('click', (event: MouseEvent) => {
    playerMode = MULTIPLAYER;
    toOptions(mainMenuEl);
})