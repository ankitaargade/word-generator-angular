import { Component } from "@angular/core";
import wordsArray from "../utils/words";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "word-generator";
  limit: number = 10;

  words = "";

  onChangeInLimit(newLimit) {
    this.limit = newLimit;
  }

  generateWords() {
    this.words = wordsArray.slice(0, this.limit).join(" ");
    console.log(this.words);
  }
}
