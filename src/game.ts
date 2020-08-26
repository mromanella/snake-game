import { Player } from "./player";
import { KeyboardController } from "./animator/src/keyboard/index";
import { Animator } from "./animator/src/models";
import FoodSpawner from "./food/foodSpawner";

export interface Game {
    player1: Player,
    player2: Player,
    foodSpawner: FoodSpawner,
    controller: KeyboardController,
    animator: Animator,
    running: boolean,
    options: any
}