import { Player, PlayerGoodness } from "./player";
import { Weapon } from "../causeofdeath";

export class Werewolf extends Player {
    public constructor(username: string) {
        super(username, PlayerGoodness.Bad);
    }

    public kill(player: Player) {
        player.attemptToKill(Weapon.WerewolfClaws, this);
    }
}