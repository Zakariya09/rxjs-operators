import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {

  transform(value: number): string {

    if (value <= 10) {
      return `${value} (Weak)`
    } else if (value > 10 && value <= 20) {
      return `${value} (Strong)`
    }
    return `${value} (Strongest)`
  }

}
