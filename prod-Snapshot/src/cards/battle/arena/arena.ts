//arena monte les deux pokebattlecard de player 1 a gauche et player 2 a droite 
// c'est "l'arene" avec les deux pokemons qui combattent

import { renderPokeBattleCard } from "../pokeBattle/pokeBattle";

export function renderArenaCard():HTMLElement{

    //on cree une div 
    const arenaCard=document.createElement("div");

    //on ajoute sa classe :
    arenaCard.className="flex w-full justify-between";
    //player 1 pokebattle card
    const p1pokeBattleCard=renderPokeBattleCard(1);
    //player 2 pokebattle card
    const p2pokeBattleCard=renderPokeBattleCard(2);
    //ajout :
    arenaCard.append(p1pokeBattleCard,p2pokeBattleCard);

    return(arenaCard);

}