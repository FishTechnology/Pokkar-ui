import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
