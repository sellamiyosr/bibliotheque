import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'specialites', redirectTo: 'specialites/index', pathMatch: 'full' },
  { path: 'specialites/index', component: IndexComponent },
  { path: 'specialites/:livreId/details', component: DetailsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialitesRoutingModule { }
