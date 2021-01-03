import { Injectable } from "@angular/core";
import axios from "axios";
import { environment } from "../../../environments/environment";
import { StoryPointModel } from "./storypointmodel";

@Injectable({
  providedIn: "root",
})
export class StoryPointService {
  constructor() {}

  async getStoryPoint(userId: number): Promise<StoryPointModel[]> {
    const resposne = await axios.get<StoryPointModel[]>(environment.pokkar_bff_url + "pokkarproxy/games/storypoint?userid=" + userId);
    return resposne.data;
  }
}
