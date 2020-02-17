import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComicsComponent } from './comics.component';
import { ComicsHomeComponent } from './comics-home/comics-home.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroSearchComponent} from './heroes/modal/hero-search/hero-search.component';

/**
 * Comics Routing Module
 *
 * @author: Austin Roa
 * @since: 1.0
 */
const routes: Routes = [
  {
    path: '', component: ComicsComponent,
    children: [
      {
        path: 'home', component: ComicsHomeComponent
      },
      {
        path: 'heroes', component: HeroesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
