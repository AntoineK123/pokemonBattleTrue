import type { IAttack, IHeal,IPokemonInfo } from "../interfaces";
import { Pokemon } from "../classes/classes";
//SOMMAIRE
// 1) : store des infos de bases des pokes dans un array 
// 2) : store dans des objets/variables les attaques et heals (communs, typés ou personels)
// 3) : construction d'un array de pokemon tout "frais" prêt pour une bataille


// 1) ici on store les infos de bases des pokemons  avec leurs infos principales


export const pokeRawInfoArr: IPokemonInfo[] = [
  {
    id: 1,
    name: "Hericendre",
    pinballname: "hericendrePB",
    avatarname:"hericendreAV",
    type:"feu",
    desc: {
      attack: "Hericendre hérisse ses piquants enflammés et charge l'ennemi !",
      heal: "Hericendre roule en boule pour panser ses blessures.",
      bonus: "Les braises de Hericendre brûlent l'adversaire au contact.",
    },
  },
  {
    id: 2,
    name: "Bulbizarre",
    pinballname: "bulbizarrePB",
    avatarname:"bulbizarreAV",
    type:"herbe",
    desc: {
      attack: "Bulbizarre fouette l'ennemi avec ses lianes tranchantes !",
      heal: "Bulbizarre absorbe la lumière du soleil pour récupérer.",
      bonus: "Les spores de Bulbizarre empoisonnent lentement l'adversaire.",
    },
  },
  {
    id: 3,
    name: "Leviantor",
    pinballname: "leviatorPB",
    avatarname:"leviatorAV",
    type:"eau",
    desc: {
      attack: "Leviantor déchaîne une tempête aquatique dévastatrice !",
      heal: "Leviantor plonge dans l'eau pour régénérer ses écailles.",
      bonus: "Le courant de Leviantor réduit la vitesse de l'ennemi.",
    },
  },
  {
    id: 4,
    name: "Ratatac",
    type:"none",
    pinballname: "ratattacPB",
    avatarname:"rattatacAV",
    desc: {
      attack: "Ratatac bondit et mord férocement son adversaire !",
      heal: "Ratatac grignote des baies sauvages pour reprendre des forces.",
      bonus: "La morsure de Ratatac réduit la défense de l'ennemi.",
    },
  },
];

// 2) 

// VARIABLES CONTENANTS LES ARRAY D'OBJETS ATTAQUES ET HEALS (communs, typé, personel) QUI SONT LOADES PAR LE CONSTRUCTOR

  // ---- ATTAQUES :  COMMUNES - TYPEES - PERSONELLES ---- // 

    //objet qui va stocker les communes attaques à tous les pokemons
    export const pokeAllAttacks: IAttack[]=[{label:"Charge",damage:10,pp:99}]

    //objet qui stocke les attaques "typées" par type
    export const pokeTypeAttacks:Record<string,IAttack[]>={
      "feu":[{label:"Boule de feu",damage:20,pp:3}],
      "herbe":[{label:"Epines tranchantes",damage:20,pp:3}],
      "eau":[{label:"Pluie torrentielle",damage:20,pp:3}],
      //un pokemon peut ne pas avoir de type (et donc pas d'attaque typée)
      "none":[]
    }

        //on stocke ici la/les attaques personelle de chaque pokemon basé sur l'id du pokemon en clé
    export const pokePersoAttacks:Record<number,IAttack[]>={
      //basé sur l'id du poke on lui affecte des attaques personelles
      1:[{label:"Epines brulantes",damage:15,pp:5}],
      2:[{label:"Fouet de lianes",damage:15,pp:5}],
      3:[{label:"Hydroqueue",damage:15,pp:5}],
      4:[{label:"Croc Fatal",damage:15,pp:5}],
    }


  // ---- HEALS :  COMMUNS - TYPES - PERSONELS ---- // 

    //objet qui va stocker les heals des pokemons communes
    export const pokeAllHeals: IHeal[]=[{label:"Baie vita",extraPV:15,pp:3}]

    //objet qui stocke les heals "typées" par type
    export const pokeTypeHeals:Record<string,IHeal[]>={
      "feu":[{label:"Galet de charbon",extraPV:40,pp:2}],
      "herbe":[{label:"Poudre minérale",extraPV:40,pp:2}],
      "eau":[{label:"Laitue de mer",extraPV:40,pp:2}],
      "none":[]
    }

    //on stock ici la/les heals personel de chaque pokemon basé sur l'id du pokemon en clé 
    export const pokePersoHeals:Record<number,IHeal[]>={
      //basé sur l'id du poke on lui affecte des attaques personelles
      1:[{label:"Repli épineux",extraPV:30,pp:2}],
      2:[{label:"Vernalisation",extraPV:30,pp:2}],
      3:[{label:"Mue aquatique",extraPV:30,pp:2}],
      4:[{label:"Cachette Vitale",extraPV:30,pp:2}],
    }


    export const rawPokeData:Pokemon[]=pokeRawInfoArr.map((pokeinfo)=> {return(new Pokemon(pokeinfo))})




