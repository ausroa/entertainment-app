import { NgModule } from '@angular/core';

import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';

/**
 * Games Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
@NgModule({
  declarations: [
    GamesComponent
  ],
  imports: [
    GamesRoutingModule
  ]
})
export class GamesModule { }
