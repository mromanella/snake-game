import { Options, createGame, startGame, stopGame } from "./game";

import "./index.css";

// Display the settings

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
        document.querySelector('.game-options').classList.remove('hidden');
    });
})