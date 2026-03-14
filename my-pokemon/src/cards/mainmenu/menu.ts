
import { renderPokedex } from "../pokedex/pokedex";
import { renderRules } from "../rules/rules";
import { renderPreBattleCard } from "../prebattle/prebattle.ts/prebattle";

import { DivMenuStyle, setBottomBut, setTitle } from "../../utils";

import type { menuElement } from "../../interfaces";
//pour sound 
import { playSong,currentAudio } from "../../sound/soundmanagement";

export function renderMenu(
    parentDiv: HTMLDivElement
): void {

    //on cree le tableau qui va contenir la liste des elements cliquable du menu : 
    const menuEleArray: menuElement[] = [];

    const newgameEle: menuElement = {
        label: "New game",
        selected: true,
        onClickFunc: () => { console.log("click newgame"); renderPreBattleCard(parentDiv as HTMLDivElement) }
    }

    const pokedexEle: menuElement = {
        label: "Pokedex",
        selected: false,
        onClickFunc: () => { console.log("click Pokedex"); renderPokedex(1, parentDiv as HTMLDivElement) }
    }

    const rulesEle: menuElement = {
        label: "Rules",
        selected: false,
        onClickFunc: () => { console.log("click Rules"); renderRules(parentDiv as HTMLDivElement) }
    }

    // on cree le menu array
    menuEleArray.push(newgameEle, pokedexEle, rulesEle);

    DivMenuStyle(menuEleArray, parentDiv);

    //on ajoute le titre de la section en cours
    setTitle("MENU PRINCIPAL");

    //On set le button du bas un bouton vide
    setBottomBut("");

    if (currentAudio === null || !String(currentAudio.src).includes("maintheme.mp3")) {
        playSong("./tracks/maintheme.mp3");
    }


}