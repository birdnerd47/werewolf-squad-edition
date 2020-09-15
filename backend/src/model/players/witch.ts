import { Weapon } from "../causeofdeath";
import { Protection, ProtectionType } from "../protection";
import { Player, PlayerGoodness } from "./player";

export class Witch extends Player {
    private hasHealingPotion: boolean = true;
    private hasPoison: boolean = true;

    public constructor(username: string) {
        super(username, PlayerGoodness.Neutral);
    }

    public useHealingPotionOn(player: Player): boolean {
        if (this.hasHealingPotion) {
            player.applyProtection(new Protection(this, ProtectionType.HealingPotion));
            this.hasHealingPotion = false;
            return true;
        }
        return false;
    }

    public usePoisonOn(player: Player): boolean {
        if (this.hasPoison) {
            player.attemptToKill(Weapon.Poison, this);
            this.hasPoison = false;
            return true;
        }
        return false;
    }
}