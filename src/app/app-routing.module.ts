import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import {ComicsComponent} from './dashboard/comics/comics.component';
import {GamesComponent} from './dashboard/games/games.component';
import {MusicComponent} from './dashboard/music/music.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'comics', component: ComicsComponent },
      { path: 'games', component: GamesComponent },
      { path: 'music', component: MusicComponent }
    ]
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
