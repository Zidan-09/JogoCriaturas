import { BattleArena } from "./models/battleArena";
import { Elf, Dragon, Troll, Ogre } from "./models/creatureTypes";

const arena: BattleArena = new BattleArena();

const Fiona: Ogre = new Ogre('Fiona');
const George: Ogre = new Ogre('George');
const Chico: Ogre = new Ogre('Chico');
const Banguela: Dragon = new Dragon('Banguela');
const Abacate: Elf = new Elf('Abacate');
const Eyder: Troll = new Troll('Eyder');

arena.addCreature(Fiona);
// arena.addCreature(George);
// arena.addCreature(Chico);
arena.addCreature(Banguela);
arena.addCreature(Abacate);
arena.addCreature(Eyder);

console.log(arena.startBattle());