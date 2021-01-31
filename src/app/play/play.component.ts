import { Component, OnInit } from "@angular/core";
import { PlayersDetail } from "./PlayersDetail";
import anime from "animejs/lib/anime.es.js";

@Component({
  selector: "app-play",
  templateUrl: "./play.component.html",
  styleUrls: ["./play.component.scss"],
})
export class PlayComponent implements OnInit {
  playersDetail: PlayersDetail;
  showLoading: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.playersDetail = {
      showCard: false,
      players: [
        { id: 1, name: "Sajan Soosai Micheal", point: "3" },
        { id: 2, name: "Sajan Soosai Micheal", point: "5" },
        { id: 3, name: "Sajan Soosai Micheal", point: "8" },
        { id: 1, name: "Sajan Soosai Micheal", point: "1" },
        { id: 2, name: "Sajan Soosai Micheal", point: "12" },
        { id: 3, name: "Sajan Soosai Micheal", point: "20" },
        { id: 1, name: "Sajan Soosai Micheal" },
        { id: 2, name: "Sajan Soosai Micheal" },
        { id: 3, name: "Sajan Soosai Micheal" },
      ],
    };
  }

  showCard(): void {
    this.showLoading = true;
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
  }

  resetCard(): void {
    this.showLoading = false;
    this.playersDetail.showCard = false;
    this.playersDetail.players.forEach((player) => {
      player.point = "?";
    });
    var card = document.getElementsByClassName("card");
    anime({
      targets: card,
      scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
      rotateY: { value: "+=180", delay: 200 },
      easing: "easeInOutSine",
      duration: 400,
    });
  }
}
