import {Pokemon} from "./pokemon";
import {whoAttacksFirst, pokeAttack, pokeFight} from "./attack";

const poke1 = new Pokemon("Pikachu", 50,62, 12);
const poke2 = new Pokemon("Dracaufeu", 52,52,20);


pokeFight(poke1, poke2);


