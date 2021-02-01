import { AfterViewInit, Component, ViewChild, OnInit } from "@angular/core";
import { PlayersDetail } from "./PlayersDetail";
import anime from "animejs/lib/anime.es.js";
import { KeyPair } from "../commons/KeyPair";
import { PlayerPoints } from "./PlayerPoints";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Observable } from "rxjs";
import { StoryPointModel } from "../setup/storypoint/storypointmodel";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"],
})
export class PlayComponent implements OnInit {
  playersDetail: PlayersDetail;
  isShowPoints: boolean = false;
  displayedColumns: string[] = ["point", "selectedOfCount"];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  public storyPointModel: StoryPointModel[];
  selectedStoryPoint: string;

  constructor() {}

  // @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild(MatSort) set matSort(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  ngOnInit(): void {
    this.playersDetail = {
      showCard: false,
      players: [
        { id: 1, name: "Sajan Soosai Micheal", point: "3" },
        { id: 2, name: "Sajan Soosai Micheal", point: "5" },
        { id: 3, name: "Sajan Soosai Micheal", point: "3" },
        { id: 1, name: "Sajan Soosai Micheal", point: "12" },
        { id: 2, name: "Sajan Soosai Micheal", point: "12" },
        { id: 3, name: "Sajan Soosai Micheal", point: "5" },
        { id: 1, name: "Sajan Soosai Micheal" },
        { id: 2, name: "Sajan Soosai Micheal" },
        { id: 3, name: "Sajan Soosai Micheal" },
      ],
    };
    this.storyPointModel = [
      { id: 1, point: "0" },
      { id: 2, point: ".5" },
      { id: 3, point: "1" },
      { id: 4, point: "2" },
      { id: 5, point: "3" },
      { id: 6, point: "5" },
      { id: 7, point: "8" },
      { id: 8, point: "13" },
      { id: 9, point: "20" },
      { id: 10, point: "40" },
      { id: 11, point: "100" },
      { id: 12, point: "?" },
    ];
  }

  showCard(): void {
    this.isShowPoints = true;
    this.playersDetail.showCard = true;

    var card = document.getElementsByClassName("card");
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
      complete: function (anim) {},
    });
    this.showPointsTable();
  }

  showPointsTable(): void {
    var groupBy = function (values, key) {
      return values.reduce(function (value, x) {
        (value[x[key]] = value[x[key]] || []).push(x);
        return value;
      }, {});
    };
    let groupedPoint = groupBy(this.playersDetail.players, "point");

    let playerPoints = [];
    for (let key in groupedPoint) {
      playerPoints.push({ point: key, selectedOfCount: groupedPoint[key].length });
    }
    this.dataSource.data = playerPoints;
  }

  resetCard(): void {
    this.selectedStoryPoint = "";
    this.playersDetail.showCard = false;
    this.playersDetail.players.forEach((player) => {
      player.point = "";
    });
    var card = document.getElementsByClassName("card");
    if (!this.isShowPoints) {
      return;
    }
    this.isShowPoints = false;
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
    });
  }

  setActiveItem(point: string): void {
    this.selectedStoryPoint = point;
  }
}
