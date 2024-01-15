import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivresRoutingModule } from './livres-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { TablesComponent } from './tables/tables.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexComponent,
    DetailsComponent,
    TablesComponent,
    CreateComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    LivresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LivresModule { }
