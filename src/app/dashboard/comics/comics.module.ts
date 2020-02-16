import { NgModule } from '@angular/core';

import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';

/**
 * Comics Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
@NgModule({
  declarations: [
    ComicsComponent,
    ComicsHomeComponent,
    HeroesComponent
  ],
  imports: [
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
