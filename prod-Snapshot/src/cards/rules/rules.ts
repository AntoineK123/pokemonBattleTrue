import { rulesArr } from "../../rules";
import { setBottomBut, setTitle } from "../../utils";
import { renderMenu } from "../mainmenu/menu";

export function renderRules(parentDiv:HTMLDivElement){

    //On ajoute a partir du rules array 
    // les regles du jeu a la parent div

    const rulesArray:string[]=rulesArr;

    //on cree la div qui va contneir les regles
    const rulesDiv=document.createElement("div");
    rulesDiv.className="flex flex-col gap-2 p-3"

    rulesArray.forEach((rule)=>{
        const p = document.createElement("p");
        p.innerText=rule;
        rulesDiv.append(p);
    })

    //apres avoir ajoute chaque une des regles du arrray on l'ajout au dom
    parentDiv.innerHTML="";
    parentDiv.append(rulesDiv);

    //on set le title de la section
    setTitle("Regles")

    //on set le bottomdu bas 
    setBottomBut("<< RETOUR MENU PRINCIPAL", () => {renderMenu(parentDiv)} )

}