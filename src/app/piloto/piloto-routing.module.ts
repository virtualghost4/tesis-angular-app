import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';
import {PilotoHomeComponent} from './piloto-home.component';
import {PilotoListComponent} from './piloto-list/piloto-list.component';
import {PilotoCreateComponent} from './piloto-create/piloto-create.component';

const routes: Routes = [
  { path: '', component: PilotoListComponent},
  { path: 'create', component: PilotoCreateComponent},
  /*
  { path: '', component: PilotoHomeComponent, canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PilotoListComponent,
      },
      {
        path: 'create',
        component: PilotoCreateComponent
      }
    ]}*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotoRoutingModule { }