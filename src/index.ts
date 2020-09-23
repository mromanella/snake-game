import "./index.css";
import { Game, Options } from "./game";
import { setTopScoreText, setOptions, showNotification, getTopScoreTag, updateScoreText } from "./utils";
import { GAME_FINISH_EVENT, MULTIPLAYER, SINGLEPLAYER, MENU_CLICK, MENU_HOVER, FOOD_PICKUP, PLAYER_DEATH_EVENT, BG_MUSIC } from "./constants";
import { getTopScore, saveTopScore, getOptions, saveOptions, haveDBAccess } from "./db";
import { elements, keyboard, events, sounds } from "./animator/index";

// Get ref to all menu items
const mainMenuEl: HTMLElement = document.querySelector('#main-menu');

const gameOptionsEl: HTMLElement = document.querySelector('#options');
const startingSpeedEl: HTMLSelectElement = document.querySelector('#startingSpeed');
const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
const displayGridEl: HTMLSelectElement = document.querySelector('#displayGrid');
const playButtonEl: HTMLElement = document.querySelector('#play-button');

const infoSectionEl: HTMLSelectElement = document.querySelector('#info');
const infoButtonEl: HTMLElement = document.getElementById('info-button');

const playAreaEl: HTMLSelectElement = document.querySelector('#play-area');

const goBackButtonEl: HTMLSelectElement = document.querySelector('#go-back-button');
const gameFinishedEl: HTMLElement = document.querySelector('#game-finished-section');
const restartButtonEl: HTMLElement = document.querySelector('#restart-button');
const mainMenuButtonGameFinishedEl: HTMLElement = document.querySelector('#main-menu-button-game-finished');
const mainMenuButtonPausedEl: HTMLElement = document.querySelector('#main-menu-button-paused');

const singlePlayerButtonEl: HTMLElement = document.getElementById('singleplayer-button');
const multiplayerButtonEl: HTMLElement = document.getElementById('multiplayer-button');

const player2ControlsEl: HTMLElement = document.querySelector('#player2-controls');

const pausedSectionEl: HTMLSelectElement = document.querySelector('#paused-section');

const startSectionEl: HTMLElement = document.querySelector('#start-button-section');
const startButtonEl: HTMLElement = document.querySelector('#start-button');

let currentScreen = startSectionEl;
let previousScreen = startSectionEl;
let playerMode = SINGLEPLAYER;

const eventController = events.getEventController();
const soundController = sounds.getSoundController();

soundController.add(MENU_HOVER, 'assets/sounds/menu/beep.wav');
soundController.add(MENU_CLICK, 'assets/sounds/menu/confirmbeep.wav');
soundController.add(FOOD_PICKUP, 'assets/sounds/snake/fire.wav');
soundController.add(PLAYER_DEATH_EVENT, 'assets/sounds/snake/oops.wav');
soundController.add(BG_MUSIC, 'assets/sounds/bg/IntroLoop.wav').loop = true;
soundController.get(BG_MUSIC).volume = 0.5;

function playFoodPickupSound() {
    soundController.pause(FOOD_PICKUP);
    soundController.scrub(FOOD_PICKUP);
    soundController.play(FOOD_PICKUP);
}

function pauseBGMusic() {
    soundController.pause(BG_MUSIC)
    soundController.scrub(BG_MUSIC);
}

startButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    transitionScreen(startSectionEl, mainMenuEl);
})
addHoverShakeSound(startButtonEl);

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


function togglePause(game: Game) {
    if (game.running) {
        soundController.get(BG_MUSIC).volume = 0.25;
        game.pause();
        elements.showElement(pausedSectionEl);
    } else {
        soundController.get(BG_MUSIC).volume = 0.5;
        elements.hideElement(pausedSectionEl);
        game.resume();
    }
}

function onFinish(game: Game, pKey: keyboard.Key) {
    if (!game.isMultiplayer()) {
        if (haveDBAccess()) {
            getTopScore().onsuccess = (event: any) => {
                const highScore = event.target.result['score'];
                const score = game.player1.score;
                if (score > highScore) {
                    saveTopScore(score);
                    setTopScoreText(score);
                    showNotification('New top score!');
                }
            }
        } else {
            const score = game.player1.score;
            const highScore = Number(getTopScoreTag().textContent);
            if (score > highScore) {
                setTopScoreText(score);
                showNotification('New top score!');
            }
        }
    }
    pauseBGMusic();
    game.pause();
    pKey.setLocked(true);
    elements.showElement(gameFinishedEl);
}

function playMenuHighlightSound() {
    soundController.pause(MENU_HOVER);
    soundController.scrub(MENU_HOVER);
    soundController.play(MENU_HOVER);
}

function playMenuClickSound() {
    soundController.pause(MENU_CLICK);
    soundController.scrub(MENU_CLICK);
    soundController.play(MENU_CLICK);
}

function addHoverShakeSound(el: HTMLElement) {
    el.addEventListener('mouseenter', () => {
        playMenuHighlightSound();
        elements.shake(el, true);
    })
    el.addEventListener('mouseleave', () => {
        elements.removeShake(el);
    })
}

goBackButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    transitionScreen(currentScreen, previousScreen);
});
addHoverShakeSound(goBackButtonEl);

restartButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    elements.hideElement(gameFinishedEl);
    playButtonEl.click();
})
addHoverShakeSound(restartButtonEl);

mainMenuButtonGameFinishedEl.addEventListener('click', () => {
    playMenuClickSound();
    pauseBGMusic();
    elements.hideElement(gameFinishedEl);
    toMainMenu(currentScreen);
})
addHoverShakeSound(mainMenuButtonGameFinishedEl);

mainMenuButtonPausedEl.addEventListener('click', () => {
    playMenuClickSound();
    pauseBGMusic();
    elements.hideElement(pausedSectionEl);
    toMainMenu(currentScreen);
})
addHoverShakeSound(mainMenuButtonPausedEl);

playButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    updateScoreText(1, 0);
    const options: Options = {
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false,
        displayGrid: displayGridEl.value === 'true' ? true : false,
        startingSpeed: Number(startingSpeedEl.value)
    }
    if (haveDBAccess()) {
        saveOptions(playerMode, options);
    }

    if (playerMode === SINGLEPLAYER) {
        elements.hideElement(player2ControlsEl);
    } else {
        elements.showElement(player2ControlsEl);
    }

    const game = new Game(playerMode, options);

    const kbController = keyboard.getKeyboardController();
    const pKey = new keyboard.Key(keyboard.keyNames.P, [() => {
        togglePause(game);
    }]);
    kbController.addKey(pKey)

    eventController.register(GAME_FINISH_EVENT, onFinish, game, pKey);
    eventController.register(FOOD_PICKUP, playFoodPickupSound)

    transitionScreen(currentScreen, playAreaEl);
    soundController.play(BG_MUSIC);
    game.start();
})
addHoverShakeSound(playButtonEl);

infoButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    transitionScreen(mainMenuEl, infoSectionEl, true);
})
addHoverShakeSound(infoButtonEl);

singlePlayerButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    playerMode = SINGLEPLAYER;
    toOptions(mainMenuEl);
})
addHoverShakeSound(singlePlayerButtonEl);

multiplayerButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    playerMode = MULTIPLAYER;
    toOptions(mainMenuEl);
})
addHoverShakeSound(multiplayerButtonEl);