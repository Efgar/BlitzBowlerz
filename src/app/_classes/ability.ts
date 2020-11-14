import { Flag } from './flag';

export class Ability {
    icon: string;
    name:string;
    description:string;
    flags:Flag[];

    constructor(icon: string, name: string, description: string, flags:Flag[]) {
        this.icon = icon;
        this.name = name;
        this.description = description;
        this.flags = flags
    }

    static PASS = new Ability("assets/_img/_skills/passing.png", "Pass", "This is a pass description", [Flag.OFICIAL]);
    static SURE_HANDS = new Ability("assets/_img/_skills/sure_hands.png", "Sure Hands", "Sure hands for sure", [Flag.OFICIAL]);
}
