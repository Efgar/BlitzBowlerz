import { Injectable } from '@angular/core';
import { Ability } from '../_classes/ability';
import { Flag } from '../_classes/flag';
import { Ball } from '../_classes/ball';
import { Challenge } from '../_classes/challenge';
import { Team } from '../_classes/team';
import { Rule } from '../_classes/rule';
import { CoachTrait } from '../_classes/coach-trait';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  getCoachTrait(): CoachTrait[] {
    return [
      {
        name: "Linemens",
        description: "Your linemmen are awesome",
        isHomebrew : true
      },
      {
        name: "Sponsored Kit",
        description: "After making an Armour check, you can re-roll the dice.",
        diceRoll: 3,
        isHomebrew : false
      }
    ];
  }
  getOtherRules(): Rule[] {
    return [
      {
        name: "Multiple balls",
        sumary: "All of them",
        description: "Put more balls",
        tags: ["optional", "balls", "league"],
        isHomebrew : false
      },
      {
        name: "Ugly orks",
        sumary: "orks are ugly",
        description: "so ugly they hurt, +1 str",
        tags: ["optional", "race"],
        isHomebrew : true
      }
    ];
  }
  
  getChallengeCards(): Challenge[] {
    return [
      {
        name: "The name",
        image: "string",
        cardText: "Ipsum lorenz of challenges",
        points: 1,
        bonusPlayName: "The bonus play",
        bonusPlayText: "This is how we play the play",
        isEndGame: false,
        isHomebrew: false,
        faqs: [
          "Da rule is clear",
          "Da rule is the rule"
        ]
      },
      {
        name: "The Endgame name",
        image: "string",
        cardText: "Ipsum lorenz of endgame challenges",
        points: 3,
        bonusPlayName: "The Endgame bonus play",
        bonusPlayText: "This is how we play the End play",
        isEndGame: true,
        isHomebrew: true
      }
    ];
  }

  getBallRules(): Ball[] {
    return [
      {
        name: "bouncer",
        race: "goblin",
        image: "assets/_img/_teams/Orcs.png",
        effect: "bouncy bouncy castle",
        isHomebrew: true,
      }
    ];
  }

  getTeams(): Team[] {
    return [
      {
        name: "The green menace",
        color: "DarkRed",
        icon: "assets/_img/_teams/Logo_Orc_01.png",
        race: ["Orcs"],
        roster: [
          {
            amount: 2,
            player: {
              name: "Lineman",
              picture: "orc_lineman",
              abilities: [
                Ability.PASS,
              ],
              move: "4",
              throw: "+4",
              armor: "+4"
            }
          },
          {
            amount: 1,
            player: {
              name: "Blitzer",
              picture: "orc_lineman",
              abilities: [
                Ability.PASS,
              ],
              move: "4",
              throw: "+4",
              armor: "+4"
            }
          }
        ],
        flags: [
          Flag.BETA,
          Flag.HOMEBREW
        ]
      },
      {
        name: "The dwarf giants",
        color: "blue",
        icon: "assets/_img/_teams/Logo_Dwarf_01.png",
        race: ["Dwarfs"],
        roster: [
          {
            amount: 1,
            player: {
              name: "Lineman",
              picture: "orc_lineman",
              abilities: [
                Ability.PASS,
                Ability.SURE_HANDS
              ],
              move: "4",
              throw: "+4",
              armor: "+4"
            }
          }
        ]
      },
      {
        name: "The dwarf giants",
        color: "rgb(38, 77, 20)",
        icon: "assets/_img/_teams/Logo_Skaven_09.png",
        race: ["Skaven", "Goblin"],
        roster: [
          {
            amount: 2,
            player: {
              name: "Lineman",
              picture: "orc_lineman",
              abilities: [
                Ability.PASS,
              ],
              move: "4",
              throw: "+4",
              armor: "+4"
            }
          },
          {
            amount: 1,
            player: {
              name: "Blitzer",
              picture: "orc_lineman",
              abilities: [
                Ability.PASS,
              ],
              move: "4",
              throw: "+4",
              armor: "+4"
            }
          }
        ]
      }
    ];
  }

  constructor() { }
}
