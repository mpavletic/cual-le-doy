import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftorright'
})
export class LeftorrightPipe implements PipeTransform {

  transform(value: unknown): string {
    return value ? 'IZQ' : 'DER';
  }

}
