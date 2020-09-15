import { CauseOfDeath, Weapon } from "../causeofdeath";
import { Protection } from "../protection";

export enum PlayerGoodness 
{
    Good = 'Good',
    Neutral = 'Neutral',
    Bad = 'Bad',
}

export abstract class Player
{
    // Public members
    public get isLiving(): boolean {
        return !this.causeOfDeath;
    }
    public lover?: Player;

    // Private members
    private potentialCauseOfDeath?: CauseOfDeath;
    private causeOfDeath?: CauseOfDeath;
    private protections: Protection[] = [];

    // Constructor
    public constructor(
        public readonly username: string, 
        public readonly goodness: PlayerGoodness
    ) {}

    // Functions
    public attemptToKill(weapon: Weapon, perpetrator: Player) {
        this.potentialCauseOfDeath = new CauseOfDeath(weapon, perpetrator);
    }

    public applyProtection(protection: Protection) {
        this.protections.push(protection);
    }

    public endRound(): boolean {
        var died = false;
        if (this.potentialCauseOfDeath) {
            const isSaved = this.protections
                .map(protection => protection.canSaveFrom(this.potentialCauseOfDeath))
                .reduce((prev, curr) => prev || curr, false);
            if (!isSaved) {
                this.causeOfDeath = this.potentialCauseOfDeath;
                died = true;
            }
        }

        this.potentialCauseOfDeath = undefined; // clear out for next round
        return died;
    }
}