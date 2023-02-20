import { Component } from '@angular/core';
import { BornDateService } from '../services/born-date.service';
import { VaccinesService } from '../services/vaccines.service';
import { IVaccine } from './IVaccine';

@Component({
  selector: 'app-vaccines-tab',
  templateUrl: 'vaccines.page.html',
  styleUrls: ['vaccines.page.scss']
})
export class VaccinesPage {

  public maxDateSupported: string;
  public bornDate: string;
  public vaccines: IVaccine[];

  constructor(
    private vaccinesService: VaccinesService,
    private bornDateService: BornDateService
  ) {
    this.maxDateSupported = new Date().toISOString();
    this.bornDate = this.bornDateService.getDate();
    this.vaccines = this.vaccinesService.getVaccinesFrom(this.bornDate);
  }

  public setBornDate(ev: Event) {
    this.bornDateService.setDate(this.bornDate);
    this.vaccines = this.vaccinesService.getVaccinesFrom(this.bornDate);
  }
}
