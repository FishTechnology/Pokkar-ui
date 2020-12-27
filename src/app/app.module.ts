import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './setup/game/game.component';
import { StorypointComponent } from './setup/storypoint/storypoint.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    StorypointComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
