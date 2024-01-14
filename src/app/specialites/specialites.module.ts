import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitesRoutingModule } from './specialites-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SpecialitesRoutingModule,
    FormsModule,
  ]
})
export class SpecialitesModule { }
