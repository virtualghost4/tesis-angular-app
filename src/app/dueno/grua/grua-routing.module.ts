import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../../guards/auth.guard';
import { GruaListComponent} from './grua-list/grua-list.component';
import { GruaCreateComponent} from './grua-create/grua-create.component';
import { GruaEditComponent} from './grua-edit/grua-edit.component';

const routes: Routes = [
      {
        path: 'list',
        component: GruaListComponent,
      },
      {
        path: 'create',
        component: GruaCreateComponent
      },
      {
        path: 'edit/:id',
        component: GruaEditComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GruaRoutingModule { }
