import {Pokemon} from "./pokemon";
import {whoAttacksFirst, pokeAttack, pokeFight, switchTour} from "./attack";


const pikachu = new Pokemon("Pikachu", 50,62, 12);
const dracaufeu = new Pokemon("Dracaufeu", 52,52,20);


describe('Qui attaque en premier ?', () =>{
    it('poko1 attaque en 1er', () => {
        expect(whoAttacksFirst(pikachu,dracaufeu)).toBe(pikachu);
    })
});

describe('Dégât Pikachu', () =>{
    it('Pikachu inflige 12 de dégàts à dracaufeu : dracaufeu.hp -= pikachu.force', () => {
        expect(pokeAttack(pikachu,dracaufeu)).toBe(40);
    })
});

describe('Dégât Dracaufeu', () =>{
    it('Dracaufeu inflige 20 de dégât à Pikachu : pikachu.hp -= dracaufeu.force', () => {
        expect(pokeAttack(dracaufeu,pikachu)).toBe(30);
    })
});




