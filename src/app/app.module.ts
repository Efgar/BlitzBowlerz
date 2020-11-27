import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { GameComponent } from './game/game.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { RulesDashboardComponent } from './rules-dashboard/rules-dashboard.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChallengeListComponent } from './challenge-list/challenge-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TeamListComponent } from './team-list/team-list.component';
import { BallListComponent } from './ball-list/ball-list.component';
import { BallComponent } from './ball/ball.component';
import { LeagueRuleComponent } from './league-rule/league-rule.component';
import { LeagueRuleListComponent } from './league-rule-list/league-rule-list.component';
import { LeagueComponent } from './league/league.component';
import { OtherRulesListComponent } from './other-rules-list/other-rules-list.component';
import { LeagueTeamComponent } from './league-team/league-team.component';
import { LeagueGameComponent } from './league-game/league-game.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    GameComponent,
    TeamDetailsComponent,
    RulesDashboardComponent,
    ChallengeComponent,
    ChallengeListComponent,
    TeamListComponent,
    BallListComponent,
    BallComponent,
    LeagueRuleComponent,
    LeagueRuleListComponent,
    LeagueComponent,
    OtherRulesListComponent,
    LeagueTeamComponent,
    LeagueGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatTooltipModule,
    MatTabsModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
