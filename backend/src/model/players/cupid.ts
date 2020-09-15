import { Player, PlayerGoodness } from "./player";

export class Cupid extends Player {
    public constructor(username: string) {
        super(username, PlayerGoodness.Good);
    }

    public chooseLovers(lover1: Player, lover2: Player) {
        lover1.lover = lover2;
        lover2.lover = lover1;
    }
}