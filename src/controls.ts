import Key from "./animator/src/keyboard/key";
import { Point } from "./animator/src/models";
import { keyNames } from "./animator/src/keyboard/index";

type _DIRECTIONS = {
    [key: string]: Point
}

const UP = new Point(0, -1);
const DOWN = new Point(0, 1);
const LEFT = new Point(-1, 0);
const RIGHT = new Point(1, 0);

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

function getDirectionForKey(key: Key): Point {
    return DIRECTIONS_MAP[key.keyName];
}

function getPlayer1Keys(): Key[] {
    const wKey = new Key(keyNames.W);
    const sKey = new Key(keyNames.S);
    const aKey = new Key(keyNames.A);
    const dKey = new Key(keyNames.D);
    return [wKey, sKey, aKey, dKey];
}

function getPlayer2Keys(): Key[] {
    const upArrow = new Key(keyNames.ARROW_UP);
    const downArrow = new Key(keyNames.ARROW_DOWN);
    const leftArrow = new Key(keyNames.ARROW_LEFT);
    const rightArrow = new Key(keyNames.ARROW_RIGHT);
    return [upArrow, downArrow, leftArrow, rightArrow];
}

export {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    getDirectionForKey,
    getPlayer1Keys,
    getPlayer2Keys
}
