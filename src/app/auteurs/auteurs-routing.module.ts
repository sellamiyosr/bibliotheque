import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: 'auteurs', redirectTo: 'auteurs/index', pathMatch: 'full' },
  { path: 'auteurs/index', component: IndexComponent },
  { path: 'auteurs/:auteurId/view', component: ViewComponent },
  { path: 'auteurs/:auteurId/edit', component: EditComponent },
  {path: 'auteurs/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuteursRoutingModule { }
