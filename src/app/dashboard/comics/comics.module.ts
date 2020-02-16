import { NgModule } from '@angular/core';

import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { HeroSearchComponent } from './heroes/modal/hero-search/hero-search.component';

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
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    ComicsRoutingModule
  ]
})
export class ComicsModule { }
