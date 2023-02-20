import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BornDateService {
  private BORN_DATE_KEY = 'bornDate';

  constructor() { }

  public getDate(): string {
    const storedBornDate = localStorage[this.BORN_DATE_KEY];

    if (!isNaN(Date.parse(storedBornDate))) {
      return storedBornDate;
    }

    return new Date().toISOString();
  }

  public setDate(date: string): void {
    localStorage[this.BORN_DATE_KEY] = date;
  }
}
