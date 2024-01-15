import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailsComponent } from './details/details.component';
import { TablesComponent } from './tables/tables.component';


const routes: Routes = [
  { path: 'livres', redirectTo: 'livres/index', pathMatch: 'full' },
  {path: 'livre/tables', component: TablesComponent},
  { path: 'livres/index', component: IndexComponent },
  { path: 'livres/:livreId/details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivresRoutingModule { }
