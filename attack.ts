import {Pokemon} from "./pokemon";
/**
 *
 * @param pokemon1
 * @param pokemon2
 * @description Celui qui à le plus de speeed attaque le premier
 */
export async function whoAttacksFirst(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon | null>{

    if (pokemon1.speed > pokemon2.speed){
        return pokemon1;
    }
    else if (pokemon2.speed > pokemon1.speed){
        return pokemon2;
    }
    return null;
}

/**
 *
 * @param pokemon1
 * @param pokemon2
 * @description Le pokomon1 attaque le pokemon2
 */
export async function pokeAttack(pokemon1: Pokemon, pokemon2: Pokemon): Promise<number>{
    if(pokemon1.force > pokemon2.hp)
    {
        pokemon2.hp = 0;
    }
    else
    {
        pokemon2.hp -= pokemon1.force;
    }
    return pokemon2.hp;
}

export  async function switchTour(tour: number): Promise<number>{
    if(tour === 1){
        return tour = 2;
    }else {
        return tour = 1;
    }
}

export async function pokeFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<string>{
    let tour = 0;
    while (pokemon1.hp > 0 || pokemon2.hp > 0){
        const inter = setInterval(async () => {
            await switchTour(tour);
            if(tour === 1){
                console.log(pokemon1.name + " attaque " + pokemon2.name);
                await pokeAttack(pokemon1, pokemon2);
            }else if (tour === 2) {
                console.log(pokemon2.name + " attaque " + pokemon1.name);
                await pokeAttack(pokemon2, pokemon1);
            }
            if (pokemon1.hp > 0){
                clearInterval(inter);
                return "pokemon1 est mort";
            }
            if (pokemon2.hp > 0){
                clearInterval(inter);
                return "pokemon2 est mort";
            }
        }, 1000);
    }
    return "erreur";
}



// export async function pokeFight(pokemon1: Pokemon, pokemon2: Pokemon): Promise<string>{
//     let tour = 0;
//     while (pokemon1.hp > 0 || pokemon2.hp > 0){
//         await switchTour(tour);
//         if(tour === 1){
//             console.log(pokemon1.name + " attaque " + pokemon2.name);
//             await pokeAttack(pokemon1, pokemon2);
//         }else if (tour === 2) {
//             console.log(pokemon2.name + " attaque " + pokemon1.name);
//             await pokeAttack(pokemon2, pokemon1);
//         }
//
//     }
//     return "dead";
// }