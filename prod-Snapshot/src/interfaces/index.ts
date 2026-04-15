
export interface IPokemonInfo {
  //infos principales
  id: number;
  name: string;
  desc: IPokemonDesc;
  pinballname:string;
  avatarname:string;
  type:string;
}

export interface IPokemonBattle{
  //pour bataille
  maxpv:number;
  isActif: boolean;
  inactiveLabel: string;
  get attacks(): IAttack[];
  get heals(): IHeal[];
  attack(targetPlayerId:number,paraAttackIndex:number):void;
  heal(paraHealIndex:number):void;
}

 export interface IPokemonDesc{
    attack:string;
    heal:string;
    bonus:string;
}

export interface IAttack{
  label:string;
  damage:number;
  pp:number;
}

export interface IHeal{
  label:string;
  extraPV:number;
  pp:number,
}

export interface menuElement{
  label:string;
  selected:boolean,
  onClickFunc?:()=>any
}

export interface IplayersSel{
  p1SelId:null|number;
  p2SelId:null|number;
}

export interface IHealthBarDiv extends HTMLDivElement {
  updateHealth: (newCurrent: number) => void;
}