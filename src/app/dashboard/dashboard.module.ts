import { NgModule } from '@angular/core';

import { MusicComponent } from './music/music.component';
import { GamesComponent } from './games/games.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

/**
 * Dashboard Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
@NgModule({
  declarations: [
    DashboardComponent,
    GamesComponent,
    MusicComponent
  ],
  imports: [
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
