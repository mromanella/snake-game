import { Options, createGame, startGame, stopGame } from "./game";

import "./index.css";

// Display the settings

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
    console.log('Need access to database to work.');
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

document.getElementById('play-button').addEventListener('click', (event: MouseEvent) => {
    const numPlayersEl: HTMLSelectElement = document.querySelector('#numPlayers');
    const numFoodEl: HTMLSelectElement = document.querySelector('#numFood');
    const collideWithWallEl: HTMLSelectElement = document.querySelector('#collideWithWall');
    const options: Options = {
        numPlayers: Number(numPlayersEl.value),
        numFood: Number(numFoodEl.value),
        collideWithWall: collideWithWallEl.value === 'true' ? true : false
    }
    document.querySelector('.game-options').classList.add('hidden');
    const game = createGame(options);
    startGame(game);

    document.querySelector('#quit-button').addEventListener('click', () => {
        stopGame(game);
        if (game.options.numPlayers === 1) {
            getHighScore().onsuccess = (event: any) => {
                const highScore = event.target.result['score'];
                const score = game.player1.score;
                if (score > highScore) {
                    addHighScore(score);
                    setHighScoreText(score);
                }
            }
        }
        document.querySelector('.game-options').classList.remove('hidden');
    });
})

function setHighScoreText(score: number) {
    document.querySelector('#top-score-value').textContent = `${score}`;
}