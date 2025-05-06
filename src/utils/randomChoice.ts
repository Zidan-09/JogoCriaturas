import { Creature } from "../models/creature";

export function RandomMove(list: string[]): string {
    const item: string = list[Math.floor(Math.random() * list.length)];
    return item;
}

export function RandomCreature(list: Creature[]): Creature {
    const creature: Creature = list[Math.floor(Math.random() * list.length)];
    return creature;
}