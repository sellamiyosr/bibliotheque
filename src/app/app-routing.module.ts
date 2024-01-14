import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './auteurs/index/index.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  { path: 'auteurs', redirectTo: 'auteurs/index', pathMatch: 'full' },
  { path: 'auteurs/index', component: IndexComponent },
  { path: 'acceuil', component: AcceuilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
