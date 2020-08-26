import { start } from "./multiplayer";
import { INITIAL_GAME_SPEED } from "./settings";

// Display the settings


const game = start({ numFood: 1, collideWithWall: true });
let gameInterval = setInterval(() => {
    if (!game.running) {
        if (game.player1.alive) {
            console.log('player2 lost!');
        } else if (game.player2.alive) {
            console.log('player1 lost!');
        } else {
            console.log('draw!');
        }
        clearInterval(gameInterval);
    }
}, INITIAL_GAME_SPEED + 500)