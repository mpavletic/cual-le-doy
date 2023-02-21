import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgePipe } from './age.pipe';
import { DurationPipe } from './duration.pipe';
import { LeftorrightPipe } from './leftorright.pipe';
import { TimeagoPipe } from './timeago.pipe';


@NgModule({
  imports: [CommonModule],
  declarations: [AgePipe, DurationPipe, LeftorrightPipe, TimeagoPipe],
  exports: [AgePipe, DurationPipe, LeftorrightPipe, TimeagoPipe]
})
export class PipesModule { }
