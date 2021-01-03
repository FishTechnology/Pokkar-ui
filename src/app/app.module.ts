import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { SetupComponent } from "./setup/setup.component";
import { GameComponent } from "./setup/game/game.component";
import { StorypointComponent } from "./setup/storypoint/storypoint.component";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [AppComponent, SetupComponent, GameComponent, StorypointComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
