//cette function va render une modale qui presentera les attaques disponibles d'un pokemon
//
import { DivMenuStyle } from "../../../utils";
import type { menuElement } from "../../../interfaces";
import { renderBattleCard } from "../battle";
import { PokeofNewBattle, toggleTurn, turn } from "../../../data/data";
import type { Pokemon } from "../../../classes/classes";



export function renderHealModal(divtoOverwrite: HTMLElement) {

    //on cree une div vierge
    const healModal = document.createElement("div");

    //on prepare le menuele array 
    const menuEleArray: menuElement[] = [];
    
    //on demarre une boucle qui va créér un menueleArr avec chaque heal du pokemon :
    const currentPoke = PokeofNewBattle[turn.playersId] as Pokemon

    currentPoke.healsArr.forEach((heal, index) => {

        menuEleArray.push(
            {
                label: `${heal.label} (pp:${heal.pp})`,
                "selected": index === 0 ? true : false,
                onClickFunc: (() => {
                    //si il n'y a plus de pp alors on return
                    if(heal.pp===0){
                        return
                    }
                    currentPoke.heal(index);
                    currentPoke.healsArr[index].pp+=-1;
                    toggleTurn();
                    renderBattleCard();
                }) as any
            })




    });

    //on ajoute un bouton retour à l'element array
    menuEleArray.push({
        label:"Retour",
        selected:false,
        onClickFunc:(()=>{
            renderBattleCard();
    })})

    DivMenuStyle(menuEleArray, healModal);
    divtoOverwrite.innerHTML = "";
    divtoOverwrite.append(healModal);
    return


}
