import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "formatPoint",
})
export class FormatPointPipe implements PipeTransform {
  transform(value: string): string {
    if (value === "undefined" || value === undefined || value === "") {
      return "?";
    }
    return value;
  }
}
