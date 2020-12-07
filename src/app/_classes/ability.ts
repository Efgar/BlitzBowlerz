import { Flag } from './flag';

export class Ability {
    icon: string;
    name:string;
    description:string;
    flags?:Flag[];

    constructor(icon: string, name: string, description: string, flags:Flag[]) {
        this.icon = icon;
        this.name = name;
        this.description = description;
        this.flags = flags
    }

    static PASS = new Ability("ball", "Pass", "This is a pass description", []);
    static SURE_HANDS = new Ability("hands", "Sure Hands", "Sure hands for sure", []);
}
