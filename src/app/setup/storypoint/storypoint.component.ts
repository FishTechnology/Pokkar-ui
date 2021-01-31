import { Component, OnInit } from "@angular/core";
import { StoryPointService } from "../storypoint/storypoint.service";
import { StoryPointModel } from "./storypointmodel";

@Component({
  selector: "app-storypoint",
  templateUrl: "./storypoint.component.html",
  styleUrls: ["./storypoint.component.scss"],
})
export class StorypointComponent implements OnInit {
  newPoint = "";
  public storyPointModel: StoryPointModel[];

  constructor(private storyPointService: StoryPointService) {}

  async ngOnInit(): Promise<void> {
    this.storyPointModel = await this.storyPointService.getStoryPoint(1);
    var nname = "test";
  }

  addStoryPoint() {
    console.log(this.newPoint);
  }
}
