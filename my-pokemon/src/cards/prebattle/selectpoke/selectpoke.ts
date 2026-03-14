
import { DivPinball } from "../../../utils";
//import des pokemon et de la selection encours
import { playersSel } from "../../../data/data";
import { rawPokeData } from "../../../data/pokeStore";
//sera mise dans les click de selection des pokemons
import { renderPreBattleCard } from "../prebattle.ts/prebattle";


export function renderSelCard(finalAppend: HTMLElement, currentPlayer: number, title: string, subtitle: string,parentDiv:HTMLDivElement): void {

    //on prepare à l'avance le subtitle
    let newSubtitle = subtitle;


    //creation de la div 
    const Selcard = document.createElement("div");
    //on ajoute le flex col et le gap entre les elements
    Selcard.className = "flex flex-col gap-2"

    //on cree le titre h3 pour le player
    const playerTitle = document.createElement("h3");
    playerTitle.innerText = title;
    Selcard.appendChild(playerTitle);
    //flexwrap with poke avatars
    const avatarlist = document.createElement("div");
    avatarlist.className = "flex flex-wrap gap-4"

    //on ajoute tous les pokemons a la avatarList avec une taille 50px
    rawPokeData.forEach((poke) => {
        const pinball = DivPinball(50, poke.pinballname);
        pinball.classList.add("cursor-pointer");

        if (currentPlayer === 1) {

            //on ajoute le event listener
            pinball.addEventListener("click", () => {
                playersSel.p1SelId = poke.id;
                renderPreBattleCard(parentDiv);
            })

            //si le poke est selectionné on met un border specifique
            if (playersSel.p1SelId !== null && playersSel.p1SelId === poke.id) {

                pinball.className+=" border border-[3px] border-red-400";
                //on modifie le newsubtitle
                newSubtitle += " " + poke.name

            }

        }

        if (currentPlayer === 2) {

            //on ajoute le event listener
            pinball.addEventListener("click", () => {
                //on set la selection et reactualise
                playersSel.p2SelId = poke.id;
                renderPreBattleCard(parentDiv);
            })

            //si le poke est selectionné on met un border specifique
            if (playersSel.p2SelId !== null && playersSel.p2SelId === poke.id) {

                pinball.className+=" border border-[3px] border-blue-400";
                //on modifie le newsubtitle
                newSubtitle += " " + poke.name

            }

        }

        avatarlist.appendChild(pinball);

    })

    //on ajoute a Selcard:
    Selcard.appendChild(avatarlist);


    //on ajoute la box du pokemon sélectionné (subtitle)
    const selectedPokeLabel = document.createElement("p")
    selectedPokeLabel.innerText = newSubtitle

    //on ajoute a Selcard:
    Selcard.appendChild(selectedPokeLabel);

    //on ajoute la SelCard au finalAppend HMTL Element
    finalAppend.appendChild(Selcard);

}

