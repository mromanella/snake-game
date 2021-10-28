import { SINGLEPLAYER } from "./constants";
import { Options } from "./game";
import { setTopScoreText } from "./utils";

function saveTopScore(score: number) {
    const transaction = db.transaction(TOP_SCORES_DB_NAME, 'readwrite').objectStore(TOP_SCORES_DB_NAME);
    transaction.put({ name: TOP_SCORE_KEY, score: score });
}

function getTopScore(): IDBRequest {
    const transaction = db.transaction(TOP_SCORES_DB_NAME, 'readonly').objectStore(TOP_SCORES_DB_NAME);
    return transaction.get(TOP_SCORE_KEY);
}

function saveOptions(options: Options) {
    const transaction = db.transaction(OPTIONS_DB_NAME, 'readwrite').objectStore(OPTIONS_DB_NAME);
    transaction.put({ name: SINGLEPLAYER, options: options });
}

function getOptions(): IDBRequest {
    const transaction = db.transaction(OPTIONS_DB_NAME, 'readonly').objectStore(OPTIONS_DB_NAME);
    return transaction.get(SINGLEPLAYER);
}

// Set up db
let dbSuccessful = true;
let db: IDBDatabase;
const TOP_SCORES_DB_NAME = 'top_scores';
const TOP_SCORE_KEY = 'top';
const OPTIONS_DB_NAME = 'options';
const request = window.indexedDB.open("snake_game", 2);
request.onsuccess = (event: any) => {
    db = event.target.result;
    getTopScore().onsuccess = (event: any) => {
        const score = event.target.result;
        if (score) {
            setTopScoreText(score['score']);
        } else {
            saveTopScore(0);
            setTopScoreText(0);
        }
    }
    getOptions().onsuccess = (event: any) => {
        const options = event.target.result;
        if (!options) {
            const initialOptions: Options = {
                numFood: 1,
                collideWithWall: true,
                startingSpeed: 0,
                displayGrid: true
            }
            saveOptions(initialOptions);
        }
    }
}
request.onerror = () => {
    dbSuccessful = false;
    // alert('Need access to database to work.');
}
request.onupgradeneeded = (event: any) => {
    db = event.target.result;
    if (!db.objectStoreNames.contains(TOP_SCORES_DB_NAME)) {
        db.createObjectStore(TOP_SCORES_DB_NAME, { keyPath: 'name' });
    }
    if (!db.objectStoreNames.contains(OPTIONS_DB_NAME)) {
        db.createObjectStore(OPTIONS_DB_NAME, { keyPath: 'name' });
    }
}

function haveDBAccess() {
    return dbSuccessful;
}

export {
    saveTopScore,
    getTopScore,
    saveOptions,
    getOptions,
    haveDBAccess
}