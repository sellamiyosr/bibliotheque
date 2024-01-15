import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivresRoutingModule } from './livres-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { TablesComponent } from './tables/tables.component';


@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    LivresRoutingModule
  ]
})
export class LivresModule { }
