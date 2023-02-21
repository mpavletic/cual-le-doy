import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryPage } from './history.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HistoryPageRoutingModule } from './history-routing.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HistoryPageRoutingModule,
    PipesModule
  ],
  declarations: [
    HistoryPage
  ]
})
export class HistoryPageModule {}
