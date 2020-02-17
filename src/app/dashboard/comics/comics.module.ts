import { NgModule } from '@angular/core';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ComicsHomeComponent } from './comics-home/comics-home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';
import { HeroSearchComponent } from './heroes/modal';
import { ModalTemplateComponent } from '../../shared/templates';

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
    ModalTemplateComponent
  ],
  imports: [
    ComicsRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  entryComponents: [HeroSearchComponent]
})
export class ComicsModule { }
