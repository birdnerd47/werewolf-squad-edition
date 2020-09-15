import { Player, PlayerGoodness } from "./player";

export class Seer extends Player {
    public constructor(username: string) {
        super(username, PlayerGoodness.Good);
    }

    public see(player: Player): PlayerGoodness {
        return player.goodness;
    }
}