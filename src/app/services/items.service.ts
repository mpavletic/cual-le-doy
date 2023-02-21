import { Injectable } from '@angular/core';
import { IItem } from './IItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items: IItem[];
  private actualItem: IItem;
  private ITEMS_KEY = 'items';
  private ACTUAL_ITEM_KEY = 'actualItem';

  constructor() {
    const storedItems = localStorage[this.ITEMS_KEY];
    const storedActualItem = localStorage[this.ACTUAL_ITEM_KEY];
    this.items = storedItems !== undefined ? JSON.parse(storedItems) : [];
    this.actualItem = storedActualItem !== undefined ? JSON.parse(storedActualItem) : null;
  }

  public addItem(item:IItem): void {
    this.items.unshift(item);

    if (this.items.length > 50) {
      this.items.pop();
    }

    localStorage[this.ITEMS_KEY] = JSON.stringify(this.items);
  }

  public getItemByDate(time: number): IItem | undefined {
    return this.items.filter(item => item.date === time).pop();
  }

  public deleteItemByDate(time: number): void {
    this.items = this.items.filter(item => item.date !== time);
    localStorage['items'] = JSON.stringify(this.items);
  }

  public deleteAll(): void {
    this.items.length = 0;
    localStorage[this.ITEMS_KEY] = JSON.stringify(this.items);
  }

  public getAll(): IItem[] {
    return this.items;
  }

  public setActualItem(item: IItem): void {
    this.actualItem = item;
    localStorage[this.ACTUAL_ITEM_KEY] = JSON.stringify(item);
  }

  public getActualItem(): IItem {
    return this.actualItem;
  }
}
