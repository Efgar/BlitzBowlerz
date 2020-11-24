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

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    GameComponent,
    TeamDetailsComponent,
    RulesDashboardComponent,
    ChallengeComponent,
    ChallengeListComponent
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
