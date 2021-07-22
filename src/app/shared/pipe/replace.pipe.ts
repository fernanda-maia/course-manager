import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: "replace"
})
export class ReplacePipe implements PipeTransform{

    transform(value: number, local: string, currency: string) {
        return value.toLocaleString(local, { style: 'currency', currency });
    }
}