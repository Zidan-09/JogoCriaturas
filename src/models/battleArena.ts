import { Creature } from "./creature";
import { RandomMove, RandomCreature } from "../utils/randomChoice";

export class BattleArena {
    private creatures: Creature[];

    constructor() {
        this.creatures = [];
    }

    addCreature(creature: Creature) {
        this.creatures.push(creature);
    }

    startBattle(): string[] {
        const battle: string[] = [];
        const moves: string[] = ['move', 'attack', 'regen'];
        let creature: Creature;
        let move: string;
        let target: Creature;

        while (true) {
            creature = RandomCreature(this.creatures);
            move = RandomMove(moves)

            if (move === 'move') {
                battle.push(creature.move());
            } else if (move === 'attack') {
                while (true) {
                    target = RandomCreature(this.creatures);

                    if (target != creature) {
                        battle.push(creature.attack(target));

                        let alive: boolean = target.isAlive();

                        if (alive == false) {
                            battle.push(`${target.name} morreu!`)
                            let index: number = this.creatures.indexOf(target);
                            this.creatures.splice(index, 1);
                        }

                        if (this.creatures.length === 1) {
                            creature = RandomCreature(this.creatures);
                            battle.push(`${creature.name} Venceu a batalha`);
                            return battle;
                        }
                        break;
                    }
                }
            } else {
                battle.push(creature.regen())
            }
        }
    }
}