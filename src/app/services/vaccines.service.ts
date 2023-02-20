import { Injectable } from '@angular/core';
import { IVaccine } from '../vaccines/IVaccine';
import { ARGVaccinesCalendar } from './vaccines-calendar';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {

  constructor() { }

  public getAllVaccines(): IVaccine[] {
    return ARGVaccinesCalendar;
  }

  public getVaccinesFrom(date: string): IVaccine[] {
    const today = new Date().getTime(),
        born = new Date(date).getTime(),
        month = 1000 * 60 * 60 * 24 * 31, // one month
        diff = Math.floor((today - born) / month);

    return ARGVaccinesCalendar.filter( vaccine => vaccine.age >= diff);

  }
}
