import Key from "./animator/src/keyboard/key";
import { Point } from "./animator/src/objects/game-objects";
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

export {
    UP,
    DOWN,
    LEFT,
    RIGHT,
    getDirectionForKey,
    getPlayer1Keys
}
