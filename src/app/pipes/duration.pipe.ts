import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
     // one minute in miliseconds
     var minute = 60000;

     return Math.floor(value / minute) + ' min';
  }

}
