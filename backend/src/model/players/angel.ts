import { Protection, ProtectionType } from "../protection";
import { Player, PlayerGoodness } from "./player";

export class Angel extends Player {
    public constructor(username: string) {
        super(username, PlayerGoodness.Good);
    }

    public chooseSavedPlayer(player: Player) {
        player.applyProtection(new Protection(this, ProtectionType.Angel));
    }
}