import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GamehomeComponent } from "./gamehome/gamehome.component";
import { PlayComponent } from "./play/play.component";
import { GameComponent } from "./setup/game/game.component";
import { SetupComponent } from "./setup/setup.component";
import { StorypointComponent } from "./setup/storypoint/storypoint.component";

const routes: Routes = [
  {
    path: "setup",
    component: SetupComponent,
    children: [
      { path: "game", component: GameComponent },
      { path: "storypoint", component: StorypointComponent },
    ],
  },
  {
    path: "play/:id",
    component: PlayComponent,
  },
  {
    path: "",
    component: GamehomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
