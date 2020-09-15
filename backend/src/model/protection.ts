import { CauseOfDeath } from "./causeofdeath";
import { Player } from "./players/player";

export enum ProtectionType {
    HealingPotion = "healing potion",
    Angel = "angel",
}

export class Protection {
    public constructor(public readonly source: Player, public readonly type: ProtectionType) {}

    public canSaveFrom(causeOfDeath: CauseOfDeath): boolean {
        return true; // TODO
    }
}