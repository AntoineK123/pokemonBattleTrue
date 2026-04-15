import type { IplayersSel, IPokemonInfo } from "../interfaces";
import { Pokemon } from "../classes/classes";
import { pokeRawInfoArr } from "./pokeStore";

//CETTE PARTIE CONTIENT TOUTES LES VARIABLES QUI SERONT UTILISEES FREQUEMENT 
// ELLES SONT TRES UTILES POUR LA PRE BATTLE ET PENDANT LA BATTLE

//div qui va etre alimentée pour toutes les interfaces du jeu
export const mainDiv=document.getElementById("mainDiv") as HTMLDivElement;

//div qui être alimentée pour mettre les modales attaques/heal lors d'une bataille , elle sera reset à chaque nouveau renderBattleCard
export let battleMenuModal:HTMLElement;

// Variable qui va stocker l'objet qui enregistre l'id du pokemon choisi par chacun des joueurs en pre battle
export const playersSel: IplayersSel = {
  p1SelId: 1,
  p2SelId: 1
}

//va stocker le tour du joueur qui doit jouer et l'opponent
export const turn={playersId:1,opponent:2}

//et son toggler
export function toggleTurn():void{
  switch (turn.playersId){
    case 1:
      turn.playersId=2;
      turn.opponent=1;
      break;
    case 2:
      turn.playersId=1;
      turn.opponent=2;
      break;
  }
}



//cet objet est très important car c'est celui qui va contenir les deux pokemons d'une nouvelle bataille
// les deux pokemons sélectionnés en pre battle seront ensuite deep copiés ici à chaque nouvelle battle 
//par défaut on set un new pokemon le pokemon id 1
export const PokeofNewBattle:Record<number,Pokemon|null>={
  1:null,
  2:null
}

//avec une fonction setter qui va avec ,et qui permettera a chaque nouvelle game de recréer deux pokemons frais neufs pour la bataille 

export function setPokeofNewBattle(sel:IplayersSel):void{
  PokeofNewBattle[1]=new Pokemon(pokeRawInfoArr.find((poke)=>poke.id===sel.p1SelId) as IPokemonInfo);
  PokeofNewBattle[2]=new Pokemon(pokeRawInfoArr.find((poke)=>poke.id===sel.p2SelId) as IPokemonInfo);

}

export function checkWinnerId(){
  //fonction qui renvoie un number de l'id qui est mort si il y en a un , sinon zero: 
  let winnerPlayerId;
  PokeofNewBattle[1]?.pv===0?winnerPlayerId=2:winnerPlayerId=0;
  PokeofNewBattle[2]?.pv===0?winnerPlayerId=1:winnerPlayerId=0;
  return(winnerPlayerId)

}


