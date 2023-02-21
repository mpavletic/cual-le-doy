import { Component } from '@angular/core';
import { IItem } from '../services/IItem';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-history-tab',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class HistoryPage {

  constructor(private itemsService: ItemsService) {}

  public removeAll(): void {
    const confirmed = window.confirm('Todos los registros se van a borrar. Estás seguro?');

    if (confirmed) {
      this.itemsService.deleteAll();
    }
  }

  public get items(): IItem[] {
    return this.itemsService.getAll();
  }

  public deleteItem(item: IItem): void {
    this.itemsService.deleteItemByDate(item.date);
  }

}
