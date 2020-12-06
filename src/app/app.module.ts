import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './rules/player/player.component';
import { TeamComponent } from './rules/team/team.component';
import { TeamDetailsComponent } from './rules/team-details/team-details.component';
import { RulesDashboardComponent } from './rules/rules-dashboard/rules-dashboard.component';
import { ChallengeComponent } from './rules/challenge/challenge.component';
import { ChallengeListComponent } from './rules/challenge-list/challenge-list.component';
import { TeamListComponent } from './rules/team-list/team-list.component';
import { BallListComponent } from './rules/ball-list/ball-list.component';
import { BallComponent } from './rules/ball/ball.component';
import { LeagueComponent } from './league/league/league.component';
import { OtherRulesListComponent } from './rules/other-rules-list/other-rules-list.component';
import { RuleComponent } from './rules/rule/rule.component';
import { LeagueTeamComponent } from './league/league-team/league-team.component';
import { LeagueGameComponent } from './league/league-game/league-game.component';

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

import { HttpClientModule } from "@angular/common/http"; 


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    TeamDetailsComponent,
    RulesDashboardComponent,
    ChallengeComponent,
    ChallengeListComponent,
    TeamListComponent,
    BallListComponent,
    BallComponent,
    LeagueComponent,
    OtherRulesListComponent,
    RuleComponent,
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
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
