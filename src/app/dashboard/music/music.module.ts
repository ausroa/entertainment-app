import { NgModule } from '@angular/core';

import { MusicComponent } from './music.component';
import { MusicRoutingModule } from './music-routing.module';

/**
 * Music Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
@NgModule({
  declarations: [
    MusicComponent
  ],
  imports: [
    MusicRoutingModule
  ]
})
export class MusicModule { }
