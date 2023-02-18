import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VaccinesPage } from './vaccines.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VaccinesPageRoutingModule } from './vaccines-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VaccinesPageRoutingModule
  ],
  declarations: [VaccinesPage]
})
export class VaccinesPageModule {}
