import { Player } from './player';
import { Flag } from './flag';

export class Team {
    name: string;
    color: string;
    icon: string;
    race: string[];
    roster: { amount: number, player: Player }[];
    flags?: Flag[];
}
