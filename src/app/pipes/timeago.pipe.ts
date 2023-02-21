import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {
  private today: number;

  constructor() {
    this.today = new Date().getTime();
  }

  transform(value: number): string {
    let diff = this.today - value,
        minutesText = '',
        hoursText = '';

    // one day in milliseconds
    if (86400000 < diff) {
        return 'Hace más de 1 día';
    } else {
        let minutes = Math.floor(diff / 60000) % 60;
        minutesText = (minutes == 1) ? '1 min' : minutes + ' min';

        var hours = Math.floor(diff / 3600000) % 24;
        if (hours === 1) {
            hoursText = '1 h ';
        } else if (hours > 1) {
            hoursText = hours + ' hs ';
        } else {
            hoursText = '';
        }

        return 'Hace ' + hoursText + minutesText;
    }
  }

}
