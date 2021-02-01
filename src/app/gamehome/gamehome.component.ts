import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-gamehome",
  templateUrl: "./gamehome.component.html",
  styleUrls: ["./gamehome.component.scss"],
})
export class GamehomeComponent implements OnInit {
  playerName = new FormControl("", [Validators.required]);
  sessionId = new FormControl("", [Validators.required]);
  newGameForm: FormGroup = new FormGroup({
    playerName: this.playerName,
  });
  newJoinGameForm: FormGroup = new FormGroup({
    sessionId: this.sessionId,
  });
  constructor(private router: Router) {}

  ngOnInit(): void {}

  startGame(): void {
    if (this.newGameForm.valid) {
      this.router.navigate(["/play/123456"]);
    }
  }
  joinGame(): void {
    if (this.newJoinGameForm.valid) {
      this.router.navigate(["/play/123456"]);
    }
  }
}
