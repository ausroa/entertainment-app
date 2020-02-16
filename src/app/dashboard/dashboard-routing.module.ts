import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard.component';

/**
 * Dashboard Routing Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'comics', loadChildren: () => import('./comics/comics.module').then(m => m.ComicsModule)
      },
      {
        path: 'games', loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
      },
      {
        path: 'music', loadChildren: () => import('./music/music.module').then(m => m.MusicModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
