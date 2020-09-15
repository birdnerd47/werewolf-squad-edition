import {Player} from './players/player';

export enum Weapon {
    WerewolfClaws = 'claws',
    Poison = 'poison',
}

export class CauseOfDeath {
    public constructor(public readonly means: Weapon, public readonly perpetrator?: Player) {}
}