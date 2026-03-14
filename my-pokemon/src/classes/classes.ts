import type { IPokemonInfo, IPokemonDesc, IPokemonBattle, IHeal, IAttack } from "../interfaces";
import { pokeAllAttacks, pokeAllHeals, pokePersoAttacks, pokePersoHeals, pokeTypeAttacks, pokeTypeHeals } from "../data/pokeStore";
import { PokeofNewBattle } from "../data/data";

export class Pokemon implements IPokemonInfo, IPokemonBattle {

  // ---- main pokemon infos
  private _id: number;
  private _name: string;
  private _desc: IPokemonDesc;
  private _pinballname: string;
  private _avatarname: string;
  private _type: string;
  comment: string = "";

  // ---- battle statuses
  private _pv: number = 100;
  private _maxpv: number = 100;
  isActif: boolean = true;
  private _inactiveTurnsLeft: number = 0;
  inactiveLabel: string = "";

  // ---- capacites
  attacksArr: IAttack[] = [];
  healsArr: IHeal[] = [];
  attack(targetPlayerId: number, paraAttackIndex: number): void {

    let targetPoke = PokeofNewBattle[targetPlayerId] as Pokemon;
    console.log("ca attaque");
    console.log("la target",{...targetPoke});

    let bonus: number = 1;
    if (this._type === "feu") {
      if (targetPoke._type === "eau") { bonus = 0.7 }
      else if (targetPoke._type === "herbe") { bonus = 1.3 }
    }

    if (this._type === "eau") {
      if (targetPoke._type === "herbe") { bonus = 0.7 }
      else if (targetPoke._type === "feu") { bonus = 1.3 }
    }
    if (this._type === "herbe") {
      if (targetPoke._type === "feu") { bonus = 0.7 }
      else if (targetPoke._type === "eau") { bonus = 1.3 }
    }

    //on applique le damge de l'attaque au pokemon adverse
    console.log("la target avant dmg",{...targetPoke});
    targetPoke.adjustPv(-Math.floor((this.attacksArr[paraAttackIndex].damage) * bonus));
    console.log("la target apres dmg",{...targetPoke});

    //on réduit le pp de cette ataque du current poke

    console.log("Pokemon adverse touché par l'attaque : " + this.attacksArr[paraAttackIndex].label);

  }

  heal(paraHealIndex: number) {
    this.adjustPv(this.healsArr[paraHealIndex].extraPV)
  }

  constructor(data: IPokemonInfo) {
    this._id = data.id;
    this._type = data.type;
    this._name = data.name;
    this._desc = data.desc;
    this._pinballname = data.pinballname;
    this._avatarname = data.avatarname;
    //on ajoute en premier les attaques communes puis les attaques type et les attaques perso 
    this.attacksArr = [
      ...pokeAllAttacks.map(a => ({ ...a })),
      ...pokeTypeAttacks[data.type].map(a => ({ ...a })),
      ...pokePersoAttacks[data.id].map(a => ({ ...a }))
    ];
    this.healsArr = [
      ...pokeAllHeals.map(h => ({ ...h })),
      ...pokeTypeHeals[data.type].map(h => ({ ...h })),
      ...pokePersoHeals[data.id].map(h => ({ ...h }))
    ];

  }

  // --------------------
  // getters  basic infos
  // --------------------

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type
  }

  get desc(): IPokemonDesc {
    return this._desc;
  }

  get pinballname(): string {
    return this._pinballname;
  }

  get avatarname(): string {
    return this._avatarname;
  }

  get pv(): number {
    return this._pv
  }

  get InactiveTurnsLeft(): number {
    return this._inactiveTurnsLeft;
  }

  get maxpv(): number {
    return this._maxpv;
  }

  // --------------------
  // battle state getters/setters
  // --------------------


  adjustPv(amount: number): void {
    this._pv = Math.min(Math.max(this._pv + amount, 0),this._maxpv)
  }

  setInactiveTurnsLeft(para: number): void {
    this._inactiveTurnsLeft = Math.max(0, Math.floor(para));
  }


  // --------------------
  // attacks et heals
  // --------------------

  get attacks(): IAttack[] {
    return this.attacksArr;
  }

  get heals(): IHeal[] {
    return this.healsArr;
  }



}