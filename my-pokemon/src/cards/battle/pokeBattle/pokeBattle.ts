//ici le code pour generer la pokebattleCard autrement dit la vignette du pokemon d'un joeur pendant la battle 
// elle affiche notammet nom du pokemon jauge de vie et PV restants

//pour savoir quel pokemon a ete choisi



import { PokeofNewBattle } from "../../../data/data";



import { createHealthBar,DivAvatar } from "../../../utils";
import type { Pokemon } from "../../../classes/classes";

export function renderPokeBattleCard(playerid:number){

    //on definie le current poke base sur le current player:
    const currentPoke:Pokemon=PokeofNewBattle[playerid] as Pokemon;


    const pokeBattleCard=document.createElement("div");
    //on set la class
    pokeBattleCard.className="flex flex-col gap-2 p-2"

    //on ajoute les elements: 

    //h3 poke name :
    const labelplayer=document.createElement("h2");
    labelplayer.innerText="Player " + playerid
    //h3 poke name :
    const poketitle=document.createElement("h3");
    //on affecte le name du pokemon choisi par notre player en param
    poketitle.innerText=(currentPoke?.name) as string
    //on cree la jauge de vie par defaut: 
    const jauge=createHealthBar(currentPoke.pv,currentPoke.maxpv,80,12)
    // le detail de la vie :
    const hpP=document.createElement("p");
    hpP.innerText=`${currentPoke.pv}/${currentPoke.maxpv}`;
    //la div de la vignette:
    const avatar=DivAvatar(100,currentPoke?.avatarname)

    //on ajoute les elements la la poke battle card
    pokeBattleCard.append(labelplayer,poketitle,jauge,hpP,avatar);

    //on return la div
    return(pokeBattleCard);




}