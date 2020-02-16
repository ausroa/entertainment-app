import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicComponent } from './music.component';

/**
 * Music Routing Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
const routes: Routes = [
  {
    path: '', component: MusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
