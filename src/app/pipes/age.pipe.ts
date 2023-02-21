import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) {
      return 'Recién Nacido';
    } else if (value < 24) {
      return `${value} meses`;
    } else {
      return `${(value / 12)}  años`;
    }
  }

}
