import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VaccinesPage } from './vaccines.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { VaccinesPageRoutingModule } from './vaccines-routing.module';
import { AgePipe } from '../pipes/age.pipe';
import { VaccinesService } from '../services/vaccines.service';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    VaccinesPageRoutingModule,
    PipesModule
  ],
  declarations: [VaccinesPage],
  providers: []
})
export class VaccinesPageModule {}
