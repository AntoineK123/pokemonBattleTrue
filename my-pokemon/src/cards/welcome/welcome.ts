
import { DivMenuStyle, setBottomBut, setTitle } from "../../utils";

import type { menuElement } from "../../interfaces";
//pour sound 
import { renderMenu } from "../mainmenu/menu";


export function renderWelcome(
    parentDiv: HTMLDivElement
): void {

    //on cree le tableau qui va contenir la liste des elements cliquable du menu : 
    const menuEleArray: menuElement[] = [];

    const EnterEle: menuElement = {
        label: "Enter Arena",
        selected: true,
        onClickFunc: () => { renderMenu(parentDiv as HTMLDivElement) }
    }

    // on cree le menu array
    menuEleArray.push(EnterEle);

    DivMenuStyle(menuEleArray, parentDiv);

    //on ajoute le titre de la section en cours
    setTitle("WELCOME , TRAINER !");

    //On set le button du bas un bouton vide
    setBottomBut("");



}