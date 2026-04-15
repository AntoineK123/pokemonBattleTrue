
//pour creer menu start game
import { DivMenuStyle } from "../../../utils";
//pour title 
import { setTitle } from "../../../utils";
//pour bottombut 
import { setBottomBut } from "../../../utils";
import { renderMenu } from "../../mainmenu/menu";
//pour les cards de selection des poke de chaque player
import { renderSelCard } from "../selectpoke/selectpoke";
//pour new game
import { renderBattleCard } from "../../battle/battle";

//pour set les pokemons de la new game (deep copy à partir des raw poke)
import { PokeofNewBattle, setPokeofNewBattle } from "../../../data/data";
import { playersSel } from "../../../data/data";

//pour le sound:
import { playSong,currentAudio } from "../../../sound/soundmanagement";

import type { menuElement } from "../../../interfaces";

export function renderPreBattleCard(parentDiv:HTMLDivElement) {

    const prebattleCard = document.createElement("div");
    prebattleCard.className="flex flex-col gap-12 p-3"

    //on insère les players SelCard 
    renderSelCard(prebattleCard,1,"Player 1","Selected Pokemon : ",parentDiv);
    renderSelCard(prebattleCard,2,"Player 2","Selected Pokemon : ",parentDiv);
   
    //on cree l'élement start game pour le menu qui contiendra cet unique element
    const startBattleEle: menuElement = {
        label: "Start Battle",
        selected: false,
        onClickFunc: () => {setPokeofNewBattle(playersSel);console.log("icionsetpokenwbtl",{...PokeofNewBattle});console.log("setavantgame");renderBattleCard();}
    }

    const startgameMenu = document.createElement("div");
    DivMenuStyle([startBattleEle], startgameMenu);
    prebattleCard.append(startgameMenu);

    //on set le title et le bottom but action : 
    setTitle("PRE-BATTLE");
    setBottomBut("<< RETURN TO MAIN MENU", () => { renderMenu(parentDiv) })

    //on nettoie la parenttdiv (maindiv) et y met prebattleCard
    parentDiv.innerHTML="";
    parentDiv.append(prebattleCard);

    //on change le son si null ou différent:
    if(currentAudio===null || !String(currentAudio.src).includes("pokeselect.mp3")){
        playSong("./tracks/pokeselect.mp3"); 
    }

}