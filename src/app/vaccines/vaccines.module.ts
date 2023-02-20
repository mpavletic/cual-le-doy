import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VaccinesPage } from './vaccines.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VaccinesPageRoutingModule } from './vaccines-routing.module';
import { AgePipe } from '../pipes/age.pipe';
import { VaccinesService } from '../services/vaccines.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VaccinesPageRoutingModule
  ],
  declarations: [
    VaccinesPage,
    AgePipe
  ],
  providers: []
})
export class VaccinesPageModule {}
