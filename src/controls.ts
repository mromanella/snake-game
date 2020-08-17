import { Snake } from "./snake/snake";
import Key from "./animator/src/keyboard/key";
import { Point } from "./animator/src/models";
import { keyNames, lockKeys } from "./animator/src/keyboard/index";
import { changeSnakeDirection } from "./utils";

type _DIRECTIONS = {
    [key: string]: Point
}

export const UP = new Point(0, -1);
export const DOWN = new Point(0, 1);
export const LEFT = new Point(-1, 0);
export const RIGHT = new Point(1, 0);

const DIRECTIONS_MAP: _DIRECTIONS = {
    [keyNames.W]: UP,
    [keyNames.S]: DOWN,
    [keyNames.A]: LEFT,
    [keyNames.D]: RIGHT,
    [keyNames.ARROW_UP]: UP,
    [keyNames.ARROW_DOWN]: DOWN,
    [keyNames.ARROW_LEFT]: LEFT,
    [keyNames.ARROW_RIGHT]: RIGHT
}

export const getDirectionForKey = (key: Key): Point => {
    return DIRECTIONS_MAP[key.keyName];
}

export const getPlayer1Keys = (): Key[] => {
    const wKey = new Key(keyNames.W);
    const sKey = new Key(keyNames.S);
    const aKey = new Key(keyNames.A);
    const dKey = new Key(keyNames.D);
    return [wKey, sKey, aKey, dKey];
}

export const getPlayer2Keys = (): Key[] => {
    const upArrow = new Key(keyNames.ARROW_UP);
    const downArrow = new Key(keyNames.ARROW_DOWN);
    const leftArrow = new Key(keyNames.ARROW_LEFT);
    const rightArrow = new Key(keyNames.ARROW_RIGHT);
    return [upArrow, downArrow, leftArrow, rightArrow];
}

export const setupPlayerControls = (playerNumber: number, snake: Snake): Key[] => {
    let playerKeys = getPlayer1Keys();
    if (playerNumber === 2) {
        playerKeys = getPlayer2Keys();
    }

    // Init the keys
    for (let key of playerKeys) {
        key.addKeyPress((key: Key) => {
            const valid = changeSnakeDirection(snake, key);
            if (valid) {
                lockKeys(playerKeys);
            }
        })
    }

    return playerKeys;
}