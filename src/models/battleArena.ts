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

    startBattle(): void {
        const battle: string[] = [];
        const moves: string[] = ['move', 'attack', 'regen'];
        let creature: Creature;
        let move: string;
        let target: Creature;

        while (true) {
            creature = RandomCreature(this.creatures);
            move = RandomMove(moves)

            if (move === 'move') {
                console.log(creature.move());
            } else if (move === 'attack') {
                while (true) {
                    target = RandomCreature(this.creatures);

                    if (target != creature) {
                        console.log(creature.attack(target));

                        let alive: boolean = target.isAlive();

                        if (alive == false) {
                            battle.push(`${target.name} morreu!`)
                            let index: number = this.creatures.indexOf(target);
                            this.creatures.splice(index, 1);
                        }

                        if (this.creatures.length === 1) {
                            creature = RandomCreature(this.creatures);
                            console.log(`${creature.name} Venceu a batalha`);
                        }
                        break;
                    }
                }
            } else {
                console.log(creature.regen())
            }
        }
    }
}