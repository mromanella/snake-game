import "./index.css";
import { Options, createGame, startGame, stopGame, Game, pauseGame, resumeGame } from "./game";
import { hideElement, showElement, showNotification, slideIn, slideOut } from "./utils";
import { getKeyboardController, Key, keyNames } from "./animator/src/keyboard/index";

// Set up db
let db: IDBDatabase;
let objectStore: IDBObjectStore;
const HIGH_SCORES_DB_NAME = 'high_scores';
const HIGH_SCORE_KEY = 'top';
const request = window.indexedDB.open("snake_game");
request.onsuccess = (event: any) => {
    db = event.target.result;
    const gHS = getHighScore();
    gHS.onsuccess = (event: any) => {
        const highScore = event.target.result['score'];
        setHighScoreText(highScore);
    }
    gHS.onerror = (event: any) => {
        objectStore.transaction.oncomplete = () => {
            addHighScore(0);
            setHighScoreText(0);
        }
    }
}
request.onerror = () => {
    alert('Need access to database to work.');
}
request.onupgradeneeded = (event: any) => {
    db = event.target.result;
    objectStore = db.createObjectStore(HIGH_SCORES_DB_NAME, { keyPath: 'name' });
    objectStore.transaction.oncomplete = () => {
        addHighScore(0);
        setHighScoreText(0);
    }
}

function addHighScore(score: number) {
    const transaction = db.transaction(HIGH_SCORES_DB_NAME, 'readwrite').objectStore(HIGH_SCORES_DB_NAME);
    transaction.put({ name: HIGH_SCORE_KEY, score: score });
}

function getHighScore(): IDBRequest {
    const transaction = db.transaction(HIGH_SCORES_DB_NAME, 'readonly').objectStore(HIGH_SCORES_DB_NAME);
    return transaction.get(HIGH_SCORE_KEY);
}


function setHighScoreText(score: number) {
    topScoreValueEl.textContent = `${score}`;
}

// Get ref to all menu items
const topScoreValueEl: HTMLElement = document.querySelector('#top-score-value');
const mainMenuEl: HTMLElement = document.querySelector('#main-menu');

const gameOptionsEl: HTMLElement = document.querySelector('#options');
const numPlayersEl: HTMLSelectElement = document.querySelector('#numPlayers');
const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
const displayGridEl: HTMLSelectElement = document.querySelector('#displayGrid');

const rulesEl: HTMLSelectElement = document.querySelector('#info');

const playAreaEl: HTMLSelectElement = document.querySelector('#play-area');

const goBackButtonEl: HTMLSelectElement = document.querySelector('#go-back-button');

const pausedSectionEl:  HTMLSelectElement = document.querySelector('#paused-section');

let currentScreen = mainMenuEl;

function transitionScreen(from: HTMLElement, to: HTMLElement) {
    slideOut(from);
    slideIn(to);
    currentScreen = to;
}

goBackButtonEl.addEventListener('click', () => {
    transitionScreen(currentScreen, mainMenuEl);
    hideElement(goBackButtonEl);
});

document.getElementById('options-button').addEventListener('click', (event: MouseEvent) => {
    transitionScreen(mainMenuEl, gameOptionsEl);
    setTimeout(showElement, 1000, goBackButtonEl);
})

document.getElementById('info-button').addEventListener('click', (event: MouseEvent) => {
    transitionScreen(mainMenuEl, rulesEl);
    setTimeout(showElement, 1000, goBackButtonEl);
})

function togglePause(game: Game) {
    if (game.running) {
        pauseGame(game);
        showElement(pausedSectionEl);
    } else {
        hideElement(pausedSectionEl);
        resumeGame(game);
    }
}

// Game starts here
document.getElementById('play-button').addEventListener('click', (event: MouseEvent) => {
    const options: Options = {
        numPlayers: Number(numPlayersEl.value),
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false,
        displayGrid: displayGridEl.value === 'true' ? true : false
    }

    const game = createGame(options);
    const kbController = getKeyboardController();
    const pKey = new Key(keyNames.P, [() => {
        togglePause(game);
    }]);
    kbController.addKey(pKey)
    game.onFinish.add(() => {
        if (game.options.numPlayers === 1) {
            getHighScore().onsuccess = (event: any) => {
                const highScore = event.target.result['score'];
                const score = game.player1.score;
                if (score > highScore) {
                    addHighScore(score);
                    setHighScoreText(score);
                    showNotification('New top score!');
                }
            }
        }
        pKey.setLocked(true);
    });
    transitionScreen(mainMenuEl, playAreaEl);
    startGame(game);
    document.querySelector('#quit-button').addEventListener('click', () => {
        stopGame(game);
        transitionScreen(playAreaEl, mainMenuEl);
    });
})