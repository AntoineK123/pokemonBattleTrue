//import css : 
import './style.css'

//import de la fonction render menu
import { renderWelcome } from './cards/welcome/welcome';
//import de initialsong pour faire "play/pause en baissant le volume / augmentant"
import { toggleVolume } from './sound/soundmanagement';




//index va ajouter le menu a mainDiv
const mainDiv = document.getElementById("mainDiv") as HTMLDivElement;

//bouton playpause pour coupe allumer le son
const playBut = document.getElementById("playpause")as HTMLElement;;

//on ajoute au but la fonction play/pause
playBut.addEventListener("click", () => {toggleVolume()})
//on render la fonction menu : 
renderWelcome(mainDiv);

 




