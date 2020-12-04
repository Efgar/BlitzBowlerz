import { Injectable } from '@angular/core';
import { Ability } from '../_classes/ability';
import { Flag } from '../_classes/flag';
import { Ball } from '../_classes/ball';
import { Challenge } from '../_classes/challenge';
import { Team } from '../_classes/team';

@Injectable({
  providedIn: 'root'
})
export class RulesService {
  
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
        isHomebrew: true,
        faqs: []
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
        icon: "assets/_img/_teams/Orcs.png",
        race: ["Orcs"],
        rooster: [
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
              armor: "+4",
              flags: [
                Flag.OFICIAL
              ]
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
              armor: "+4",
              flags: [
                Flag.OFICIAL
              ]
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
        icon: "assets/_img/_teams/Dwarven.png",
        race: ["Dwarfs"],
        rooster: [
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
              armor: "+4",
              flags: [
                Flag.OFICIAL
              ]
            }
          }
        ],
        flags: [
          Flag.OFICIAL
        ]
      },
      {
        name: "The dwarf giants",
        color: "rgb(38, 77, 20)",
        icon: "assets/_img/_teams/Dwarven.png",
        race: ["Skaven", "Goblin"],
        rooster: [
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
              armor: "+4",
              flags: [
                Flag.OFICIAL
              ]
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
              armor: "+4",
              flags: [
                Flag.OFICIAL
              ]
            }
          }
        ],
        flags: [
          Flag.OFICIAL
        ]
      }
    ];
  }

  constructor() { }
}
