import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ComicsComponent} from './dashboard/comics/comics.component';
import {GamesComponent} from './dashboard/games/games.component';
import {MusicComponent} from './dashboard/music/music.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComicsComponent,
    GamesComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
