import "./index.css";
import { Game, Options } from "./game";
import { setTopScoreText, setOptions, showNotification, getTopScoreTag, updateScoreText } from "./utils";
import { GAME_FINISH_EVENT, MULTIPLAYER, SINGLEPLAYER, MENU_CLICK, MENU_HOVER, FOOD_PICKUP, PLAYER_DEATH_EVENT, BG_MUSIC, GAME_SPEEDS, BG_MUSIC_SPEEDS } from "./constants";
import { getTopScore, saveTopScore, getOptions, saveOptions, haveDBAccess } from "./db";
import { elements, keyboard, events, sounds } from "./animator/index";

// Get ref to all menu items
const mainMenuEl: HTMLElement = document.querySelector('#main-menu');

const gameOptionsEl: HTMLElement = document.querySelector('#options');
const startingSpeedEl: HTMLSelectElement = document.querySelector('#startingSpeed');
const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
const displayGridEl: HTMLSelectElement = document.querySelector('#displayGrid');

const infoSectionEl: HTMLSelectElement = document.querySelector('#info');
const playAreaEl: HTMLSelectElement = document.querySelector('#play-area');
const gameFinishedEl: HTMLElement = document.querySelector('#game-finished-section');

const playButtonEl: HTMLElement = document.querySelector('#play-button');
const infoButtonEl: HTMLElement = document.getElementById('info-button');
const goBackButtonEl: HTMLSelectElement = document.querySelector('#go-back-button');
const restartButtonEl: HTMLElement = document.querySelector('#restart-button');
const mainMenuButtonGameFinishedEl: HTMLElement = document.querySelector('#main-menu-button-game-finished');
const mainMenuButtonPausedEl: HTMLElement = document.querySelector('#main-menu-button-paused');
const startButtonEl: HTMLElement = document.querySelector('#start-button');
const singlePlayerButtonEl: HTMLElement = document.getElementById('singleplayer-button');
const multiplayerButtonEl: HTMLElement = document.getElementById('multiplayer-button');

const player2ControlsEl: HTMLElement = document.querySelector('#player2-controls');
const pausedSectionEl: HTMLSelectElement = document.querySelector('#paused-section');

const startSectionEl: HTMLElement = document.querySelector('#start-button-section');

const buttons = [
    playButtonEl,
    infoButtonEl,
    goBackButtonEl,
    restartButtonEl,
    mainMenuButtonGameFinishedEl,
    mainMenuButtonPausedEl,
    startButtonEl,
    singlePlayerButtonEl,
    multiplayerButtonEl
]

let currentScreen = startSectionEl;
let previousScreen = startSectionEl;
let playerMode = SINGLEPLAYER;

const eventController = events.getEventController();
const soundController = sounds.getSoundController();

function initSounds() {
    soundController.add(MENU_HOVER, 'assets/sounds/menu/beep.wav').volume(MENU_HOVER, 0.5);
    soundController.add(MENU_CLICK, 'assets/sounds/menu/confirmbeep.wav').volume(MENU_CLICK, 0.5);
    soundController.add(FOOD_PICKUP, 'assets/sounds/snake/coin10.wav').volume(FOOD_PICKUP, 0.5);
    soundController.add(PLAYER_DEATH_EVENT, 'assets/sounds/snake/oops.wav').volume(PLAYER_DEATH_EVENT, 0.5);
    soundController.add(BG_MUSIC, 'assets/sounds/bg/headinthesand.ogg').loop(BG_MUSIC);
}

function initButtonsHoverSound() {
    for (let button of buttons) {
        addHoverShakeSound(button);
    }
}

function playFoodPickupSound() {
    soundController.stop(FOOD_PICKUP).play(FOOD_PICKUP);
}

function stopBGMusic() {
    soundController.stop(BG_MUSIC);
}

function playMenuHighlightSound() {
    soundController.stop(MENU_HOVER).play(MENU_HOVER);
}

function playMenuClickSound() {
    soundController.stop(MENU_CLICK).play(MENU_CLICK);
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
        soundController.volume(BG_MUSIC, 0.5)
        game.pause();
        elements.showElement(pausedSectionEl);
    } else {
        soundController.volume(BG_MUSIC, 1);
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
    stopBGMusic();
    game.pause();
    pKey.setLocked(true);
    elements.showElement(gameFinishedEl);
}

startButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    transitionScreen(startSectionEl, mainMenuEl);
});

goBackButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    transitionScreen(currentScreen, previousScreen);
});

restartButtonEl.addEventListener('click', () => {
    playMenuClickSound();
    elements.hideElement(gameFinishedEl);
    playButtonEl.click();
});

mainMenuButtonGameFinishedEl.addEventListener('click', () => {
    playMenuClickSound();
    stopBGMusic();
    elements.hideElement(gameFinishedEl);
    toMainMenu(currentScreen);
});

mainMenuButtonPausedEl.addEventListener('click', () => {
    playMenuClickSound();
    stopBGMusic();
    elements.hideElement(pausedSectionEl);
    toMainMenu(currentScreen);
});

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
    eventController.register(FOOD_PICKUP, playFoodPickupSound);
    eventController.register(FOOD_PICKUP, () => {
        if (!game.isMultiplayer()) {
            for (let speed of GAME_SPEEDS) {
                if (game.player1.speed === speed) {
                    const i = GAME_SPEEDS.indexOf(speed);
                    soundController.playBackRate(BG_MUSIC, BG_MUSIC_SPEEDS[i]);
                    break;
                }
            } 
        }
    })

    transitionScreen(currentScreen, playAreaEl);
    soundController.volume(BG_MUSIC, 1).playBackRate(BG_MUSIC, BG_MUSIC_SPEEDS[options.startingSpeed]).play(BG_MUSIC);
    game.start();
});

infoButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    transitionScreen(mainMenuEl, infoSectionEl, true);
});

singlePlayerButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    playerMode = SINGLEPLAYER;
    toOptions(mainMenuEl);
});

multiplayerButtonEl.addEventListener('click', (event: MouseEvent) => {
    playMenuClickSound();
    playerMode = MULTIPLAYER;
    toOptions(mainMenuEl);
});

initSounds();
initButtonsHoverSound();