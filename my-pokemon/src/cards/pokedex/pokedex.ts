import { DivCursor, setBottomBut } from "../../utils";
import { DivPinball } from "../../utils";

import { rawPokeData } from "../../data/pokeStore";

import { setTitle } from "../../utils";
import { renderMenu } from "../mainmenu/menu";


export function renderPokedex(
  selectedpokeId: number,
  parentDiv:HTMLDivElement
): void {
  // sélection du pokemon a afficher la description
  let selectedPoke = rawPokeData.find((pokemon) => pokemon.id === selectedpokeId);
  if (!selectedPoke) {
    selectedPoke = rawPokeData[0];
  }

  // div principale
  const modalDiv = document.createElement("div");
  modalDiv.className = "grid grid-cols-[1fr_1fr] gap-4 ";

  // div liste des pokemons
  const pokedexListDiv = document.createElement("div");
  pokedexListDiv.className = "grid grid-cols-[30px_auto] gap-3 p-3";

  // div description
  const pokedexDescDiv = document.createElement("div");
  pokedexDescDiv.className = "flex flex-col gap-3 p-3";

  // ajout des deux div à la modale
  modalDiv.append(pokedexListDiv, pokedexDescDiv);

  // boucle sur tous les pokemons
  rawPokeData.forEach((pokemon) => {
    // curseur
    const divcursor = DivCursor();

    if (pokemon.id === selectedpokeId) {
      divcursor.classList.remove("opacity-0"); // plus propre que replace
    }

    // nom du pokemon
    const divPokeName = document.createElement("div");
    const pPokeName = document.createElement("button")
    pPokeName.innerText = pokemon.name;

    //ajout du rerender au clique: 
    pPokeName.addEventListener("click", () => {
      renderPokedex(pokemon.id,parentDiv);
    });

    //
    divPokeName.append(pPokeName);
    // ajout à la liste
    pokedexListDiv.append(divcursor, divPokeName);
  });

  // ETAPE 2: remplir la description
  const descPokeImgDiv = DivPinball(30,selectedPoke.pinballname);

  const attacksDesc = document.createElement("p");
  attacksDesc.innerText = selectedPoke.desc.attack;

  const healDesc = document.createElement("p");
  healDesc.innerText = selectedPoke.desc.heal;

  const bonusDesc = document.createElement("p");
  bonusDesc.innerText = selectedPoke.desc.bonus;

  pokedexDescDiv.append(descPokeImgDiv, attacksDesc, healDesc, bonusDesc);

  
  //on ajoute cette modale a notre parentDiv
  parentDiv.innerHTML=""
  parentDiv.append(modalDiv);

  //on change le titre de la section
  setTitle("POKEDEX");

  //on set le button 
  setBottomBut("<< MENU PRINCIPAL",()=>{renderMenu(parentDiv)})
  
}