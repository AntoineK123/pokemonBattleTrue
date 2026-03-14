//battlecard est la card qui sera affichée en permanence lors du combat 

//import arenacard
import { renderArenaCard } from "./arena/arena";
import { DivMenuStyle } from "../../utils";
import type { menuElement } from "../../interfaces";
import { renderMenu } from "../mainmenu/menu";
import { mainDiv, PokeofNewBattle } from "../../data/data";
//cght de turn : 
import { turn } from "../../data/data";

import { setTitle, setBottomBut } from "../../utils";
//modals :
import { renderAttackModal } from "./menuModals/attack";
import { renderHealModal } from "./menuModals/heal";

//pour check dead pokemon
import { checkWinnerId } from "../../data/data";

//audio : 
import { playSong, currentAudio } from "../../sound/soundmanagement";



export function renderBattleCard() {



    const battleCard = document.createElement("div");
    //ajout du css:
    battleCard.className = "flex flex-col gap-6 p-3";

    //ajout de la arenacard 
    const arenaCard = renderArenaCard();
    //a la battleCard
    battleCard.append(arenaCard);


    //on passe a la below arena card
    const belowarenaCard = document.createElement("div");

    //englobeara le h3 pokemun turn et la modal action
    belowarenaCard.className = "flex flex-col gap-3 items-center mb-6";

    //si pas de winner : 
    if (checkWinnerId() === 0) {
        const pokeTurnh3 = document.createElement("p");
        pokeTurnh3.innerText = "Tour du player n° " + turn.playersId + " ";
        //on ajoute a la battleCard le pokemon's turn
        belowarenaCard.append(pokeTurnh3)
    }

    const battleMenuModal = document.createElement("div");
    battleMenuModal.className = "pokeborder"

    //si il n'y a pas de vainqueur on cree le menu attaque / heal / objet 
    console.log("checkwinner", checkWinnerId());
    if (checkWinnerId() === 0) {
        //on definie les fonctions du menu de la battle
        //on cree le tableau qui va contenir la liste des elements cliquable du menu : 
        const menuEleArray: menuElement[] = [];

        menuEleArray.push({
            label: "ATTAQ",
            selected: true,
            onClickFunc: () => { renderAttackModal(battleMenuModal) }
        },
            {
                label: "HEAL",
                selected: false,
                onClickFunc: () => { renderHealModal(battleMenuModal) }
            },
            {
                label: "OBJET",
                selected: false,
                onClickFunc: () => { }
            })

        DivMenuStyle(menuEleArray, battleMenuModal);

    } else {
        //si il y a un vainqeur on cree un msg pour la victoire !
        const winnerMsgDiv = document.createElement("div");
        winnerMsgDiv.className = "flex flex-col gap-3 p-3";

        const firstWinningMsg = document.createElement("p");
        firstWinningMsg.innerText = `${PokeofNewBattle[checkWinnerId()]?.name}'s attack was fatal !`

        const secondWinningMsg = document.createElement("p");
        secondWinningMsg.innerText = `Player ${checkWinnerId()} wins the battle !!`

        const thirdWinningMsg = document.createElement("p");
        thirdWinningMsg.innerText = `Hope you enjoyed !`;

        //ajout des messages a la winning flexbox 
        winnerMsgDiv.append(firstWinningMsg, secondWinningMsg, thirdWinningMsg)
        //ajout de la winnging flexbox a la menu modale
        battleMenuModal.append(winnerMsgDiv)

    }

    belowarenaCard.append(battleMenuModal);

    //on ajoute below arena card a la battle card
    battleCard.append(belowarenaCard);

    //on set le title et le bottombut
    setTitle("BATTLE");
    setBottomBut("<< MENU PRINCIPAL", () => { renderMenu(mainDiv) })

    // on ajoute a main div la battlecard:
    mainDiv.innerHTML = "";
    mainDiv.append(battleCard);



    //on change l'audio si nécessaire:
    if (checkWinnerId() === 0) {
        if (currentAudio === null || !String(currentAudio.src).includes("battle.mp3")) {
            playSong("./tracks/battle.mp3");
        }
    } else{
        playSong("./tracks/battleend.mp3");
    }


}


