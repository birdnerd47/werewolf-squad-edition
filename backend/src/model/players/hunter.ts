import { Player, PlayerGoodness } from "./player";

export class Hunter extends Player {
    public constructor(username: string) {
        super(username, PlayerGoodness.Good);
    }

    public endRound() {
        const died = super.endRound();

        if (died) {

        }

        return died;
    }
}