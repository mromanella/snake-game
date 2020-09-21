import "./index.css";
import { Game, Options } from "./game";
import { hideElement, setTopScoreText, setOptions, showElement, showNotification, slideIn, slideOut } from "./utils";
import { getKeyboardController, Key, keyNames } from "./animator/src/keyboard/index";
import { register } from "./animator/src/events";
import { GAME_FINISH_EVENT, MULTIPLAYER, SINGLEPLAYER } from "./constants";
import { getTopScore, saveTopScore, getOptions, saveOptions } from "./db";

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

const pausedSectionEl: HTMLSelectElement = document.querySelector('#paused-section');

let currentScreen = mainMenuEl;
let previousScreen = mainMenuEl;
let playerMode = SINGLEPLAYER;

function transitionScreen(from: HTMLElement, to: HTMLElement, showBack: boolean = false) {
    slideOut(from);
    slideIn(to);
    previousScreen = from;
    currentScreen = to;
    if (showBack) {
        setTimeout(showElement, 800, goBackButtonEl);
    } else {
        hideElement(goBackButtonEl);
    }
}

function toOptions(from: HTMLElement, playerMode: string) {
    getOptions(playerMode).onsuccess = (event: any) => {
        const options = event.target.result.options;
        setOptions(options);
    };
    transitionScreen(from, gameOptionsEl, true);
}

goBackButtonEl.addEventListener('click', () => {
    transitionScreen(currentScreen, previousScreen);
});

playButtonEl.addEventListener('click', () => {
    const options: Options = {
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false,
        displayGrid: displayGridEl.value === 'true' ? true : false,
        startingSpeed: Number(startingSpeedEl.value)
    }
    saveOptions(playerMode, options);
    const game = create(options);
    if (playerMode === SINGLEPLAYER) {
        game.setupSingleplayer();
    } else {
        game.setupMultiplayer();
    }
    transitionScreen(gameOptionsEl, playAreaEl);
    game.start();

})

document.getElementById('options-button').addEventListener('click', (event: MouseEvent) => {
    transitionScreen(mainMenuEl, gameOptionsEl);
})

document.getElementById('info-button').addEventListener('click', (event: MouseEvent) => {
    transitionScreen(mainMenuEl, rulesEl);
})

function togglePause(game: Game) {
    if (game.running) {
        game.pause();
        showElement(pausedSectionEl);
    } else {
        hideElement(pausedSectionEl);
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
    pKey.setLocked(true);
}

function create(options: Options): Game {
    const game = new Game(options);

    const kbController = getKeyboardController();
    const pKey = new Key(keyNames.P, [() => {
        togglePause(game);
    }]);
    kbController.addKey(pKey)
    register(GAME_FINISH_EVENT, onFinish, game, pKey);
    document.querySelector('#quit-button').addEventListener('click', () => {
        game.stop();
        transitionScreen(playAreaEl, mainMenuEl);
    });
    return game;
}

// Game starts here
document.getElementById('singleplayer-button').addEventListener('click', (event: MouseEvent) => {
    playerMode = SINGLEPLAYER;
    toOptions(mainMenuEl, playerMode);
})

document.getElementById('multiplayer-button').addEventListener('click', (event: MouseEvent) => {
    playerMode = MULTIPLAYER;
    toOptions(mainMenuEl, playerMode);
})