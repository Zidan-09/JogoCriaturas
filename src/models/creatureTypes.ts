import { Creature } from "./creature";
import { RandomMove } from "../utils/randomChoice";

class Elf extends Creature {
    attackMoves: string[];

    constructor(name: string) {
        const elfHealth: number = 50;
        const elfPower: number = 30;
        super(name, elfHealth, elfPower);
        this.attackMoves = [`${this.name} moves: ${this.name} da um mortal pra trás`, `${this.name} moves: ${this.name} corre e se esconde`, `${this.name} moves: ${this.name} pula entre os obstáculos`];
    }

    move(): string {
        const move: string = RandomMove(this.attackMoves)
        return move;
    }

    regen(): string {
        this.health += 10
        return `${this.name} bebeu poção de regeneração, ${this.name} vida: ${this.health}`
    }
}

class Dragon extends Creature {
    attackMoves: string[];

    constructor(name: string) {
        const dragonHealth: number = 200;
        const dragonPower: number = 20;
        super(name, dragonHealth, dragonPower);
        this.attackMoves = [`${this.name} moves: ${this.name} voa entre as árvores`, `${this.name} moves: ${this.name} voa nas núvens`, `${this.name} moves: ${this.name} pousa e ruge causando medo`];
    }

    move(): string {
        const move: string = RandomMove(this.attackMoves)
        return move;
    }

    regen(): string {
        this.health += 30
        return `${this.name} retornou a toca e descansou, ${this.name} vida: ${this.health}`
    }
}

class Troll extends Creature {
    attackMoves: string[];

    constructor(name:string) {
        const trollHealth: number = 100;
        const trollPower: number = 10;
        super(name, trollHealth, trollPower);
        this.attackMoves = [`${this.name} moves: ${this.name} entra em um tronco de árvore`, `${this.name} moves: ${this.name} desliza para floresta a dentro`, `${this.name} moves: ${this.name} grita para causar medo`];
    }

    move(): string {
        const move: string = RandomMove(this.attackMoves)
        return move;
    }

    regen(): string {
        this.health += 20
        return `${this.name} comeu frutas selvagens, ${this.name} vida: ${this.health}`
    }
}

class Ogre extends Creature {
    attackMoves: string[];

    constructor(name:string) {
        const ogreHealth: number = 40;
        const ogrePower: number = 30;
        super(name, ogreHealth, ogrePower);
        this.attackMoves = [`${this.name} moves: ${this.name} chama Shrek para lhe ajudar`, `${this.name} moves: ${this.name} pega uma pedra no chão e arremessa para distrair os demais`, `${this.name} moves: ${this.name} se disfarça na lama`];
    }

    move(): string {
        const move: string = RandomMove(this.attackMoves)
        return move;
    }

    regen(): string {
        this.health += 20
        return `${this.name} comeu um burro falante, ${this.name} vida: ${this.health}`
    }
}

export { Elf, Dragon, Troll, Ogre }