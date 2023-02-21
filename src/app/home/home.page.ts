import { Component } from '@angular/core';
import { IItem } from '../services/IItem';
import { ItemsService } from '../services/items.service';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public isLeft: string;
  public started: boolean;
  public added: boolean;
  public item: IItem | undefined;

  constructor(private itemsService: ItemsService) {
    this.isLeft = 'false';
    this.started = false;
    this.added = false;
  }

  public ionViewWillEnter(): void {
    this.started = localStorage['started'] === 'true';
    this.isLeft = localStorage['isLeft'] === 'true' ? 'true' : 'false';
    this.added = localStorage['added'] === 'true';

    if (this.itemsService.getActualItem()) {
      this.item = this.itemsService.getActualItem();
    }

    console.log('aca entro');
  }

  /**
   * @description Returns the first three items
   * @method getItems
   * @returns {Array<IItem>} first three items
   */
  public get items(): IItem[] {
    return this.itemsService.getAll().slice(0, 3);
  }

  public start(): void {
    this.item = {
      date: new Date().getTime(),
      isLeft: this.isLeft === 'true',
      duration: 0
    };

    this.itemsService.setActualItem(this.item);
    this.itemsService.addItem(this.item);

    this.started = true;
    localStorage['started'] = this.started;

    // invert value
    this.isLeft = this.isLeft === 'true' ? 'false' : 'true';
    localStorage['isLeft'] = this.isLeft;
  }

  public stop(): void {
    if (this.item) {
      this.item.duration = new Date().getTime() - this.item.date;
      this.itemsService.deleteItemByDate(this.item.date);
      this.itemsService.addItem(this.item);
    }
    this.started = false;
    localStorage['started'] = this.started;
  }

}
