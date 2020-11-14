import { Ability } from './ability';
import { Flag } from './flag';

export class Player {
    name:string;
    picture:string;
    abilities:Ability[];
    move:string;
    throw:string;
    armor:string;
    flags:Flag[];
}
