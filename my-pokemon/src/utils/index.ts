//fichier qui rassemble des fonctions utilitaires 

import type { menuElement } from "../interfaces";

//sert a renvoyer une div qui contient un cursor de menu stylisé pokemon

export function DivCursor(): HTMLDivElement {

    const divcursor = document.createElement("div");
    divcursor.className = "w-[30px] h-[30px] opacity-0"

    const imageUrl = "./images/puce.png";
    const cursorimg = document.createElement("img");
    cursorimg.setAttribute("src", imageUrl);
    divcursor.appendChild(cursorimg)
    return (divcursor)

}

//sert a renvoyer la pinball d'un pokemon dans une div
export function DivPinball(sizeInPx: number, pinballName: string): HTMLDivElement {


    const DivPinball = document.createElement("div");
    DivPinball.className = `w-[${sizeInPx}px] h-[${sizeInPx}px]`

    const imageUrl = "./pinballs/" + pinballName + ".png";
    const pinballImg = document.createElement("img");
    pinballImg.className = "w-full h-full"
    pinballImg.setAttribute("src", imageUrl);
    DivPinball.appendChild(pinballImg);

    return (DivPinball)

}


//sert a renvoyer la pinball d'un pokemon dans une div
export function DivAvatar(sizeInPx: number, avatarName: string): HTMLDivElement {


    const DivPinball = document.createElement("div");
    DivPinball.className = `w-[${sizeInPx}px] h-[${sizeInPx}px]`

    const imageUrl = "./avatar/" + avatarName + ".png";
    const pinballImg = document.createElement("img");
    pinballImg.className = "w-full h-full"
    pinballImg.setAttribute("src", imageUrl);
    DivPinball.appendChild(pinballImg);

    return (DivPinball)

}

//sert a renvoyer une card de type menu avec une fonction ajoute dans le add event listenr click de chaque element de la lsite du menu
export function DivMenuStyle(listEles: menuElement[], parentDiv: HTMLElement) {

    //permet d'ajouter a la div parente un menu de type pokemon avec le cursor et le lable de l'element du menu , et d'ajouter si besoin 
    // la function on clik passé en argmuent dans l'objet menuElement

    // div liste des pokemons
    const menutypeListDiv = document.createElement("div");
    menutypeListDiv.className = "grid grid-cols-[30px_auto] gap-3 p-3";

    listEles.forEach((ele) => {
        // curseur
        const divcursor = DivCursor();

        if (ele.selected === true) {
            divcursor.classList.remove("opacity-0"); // plus propre que replace
        }

        // div ou se trouve le label
        const div = document.createElement("div");
        const butt = document.createElement("button")
        butt.innerText = ele.label;

        //ajout du rerender au clique:
        if (typeof ele.onClickFunc === "function") {
            butt.addEventListener("click", () => { console.log("ca clique"); ele.onClickFunc?.() });
        }


        //
        div.append(butt)
        // ajout à la liste
        menutypeListDiv.append(divcursor, div);
    });

    //ecrase la parent div par le menu
    parentDiv.innerHTML = "";
    parentDiv.append(menutypeListDiv)

}

export function setTitle(label: string) {
    const but = document.getElementById("pTitle") as HTMLButtonElement
    but.className = "text-2xl"
    but.innerText = label;

}


export function setBottomBut(label: string, onClickFunc: () => void = () => { }) {
    const butDiv = document.getElementById("bottomButDiv") as HTMLButtonElement
    //on neleve le button precedent
    butDiv.innerHTML = "";
    //on cree un button
    const newbut = document.createElement("button")
    newbut.className = "text-xl"
    newbut.innerText = label;
    newbut.addEventListener("click", () => { console.log("ca clique"); onClickFunc() })
    butDiv.append(newbut)

}

//fonction qui renvoie une jauge de vie : 

import type { IHealthBarDiv } from "../interfaces";

export function createHealthBar(current: number, max: number, width = 200, height = 20): IHealthBarDiv {
    const container = document.createElement("div") as IHealthBarDiv;
    const bar = document.createElement("div");

    Object.assign(container.style, {
        width: `${width}px`,
        height: `${height}px`,
        border: "2px solid #444",
        borderRadius: "10px",
        backgroundColor: "#222",
        overflow: "hidden",
    });

    Object.assign(bar.style, {
        height: "100%",
        width: `${(current / max) * 100}%`,
        background: "linear-gradient(90deg, #4caf50, #76ff03)",
        transition: "width 0.3s ease",
    });

    bar.style.width = `${Math.max(0, (current / max) * 100)}%`;
    if (current / max < 0.3) bar.style.background = "linear-gradient(90deg, #f44336, #ff7961)";
    else if (current / max < 0.6) bar.style.background = "linear-gradient(90deg, #ff9800, #ffc107)";
    else bar.style.background = "linear-gradient(90deg, #4caf50, #76ff03)";
    ;


    container.appendChild(bar);


    return container;
}