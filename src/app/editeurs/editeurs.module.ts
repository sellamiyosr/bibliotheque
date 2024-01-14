import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditeursRoutingModule } from './editeurs-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    EditeursRoutingModule,
    FormsModule,
  ]
})
export class EditeursModule { }
