export abstract class Creature {
    public name: string;
    protected health: number;
    protected attackPower: number;

    constructor(name: string, health: number, attackPower: number) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    };

    abstract move(): string;

    attack(target: Creature): string {
        target.defend(this.attackPower);
        return `${this.name} atacou ${target.name}, ${this.attackPower} de dano aplicado a ${target.name}, ${target.name}: ${target.health}`
    }

    defend(amount: number): void {
        this.health -= amount;
    }

    abstract regen(): string;

    isAlive(): boolean {
        if (this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }
}