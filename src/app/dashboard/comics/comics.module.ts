import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { HeroSearchComponent } from './heroes/modal';
import { ModalTemplateComponent } from '../../shared/templates';
import { HeroDetailsComponent } from './heroes/modal/hero-search/hero-details/hero-details.component';

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
    HeroSearchComponent,
    ModalTemplateComponent,
    HeroDetailsComponent
  ],
  imports: [
    ComicsRoutingModule,
    NgbModalModule
  ],
  entryComponents: [HeroSearchComponent]
})
export class ComicsModule { }
