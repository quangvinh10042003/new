import { EditComponent } from './pages/edit/edit.component';
import { AddComponent } from './pages/add/add.component';

import { DetailComponent } from './pages/detail/detail.component';
import { ListComponent } from './pages/list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"product/:id", component:ListComponent},
  {path:"detail/:id", component:DetailComponent},
  {path:"",component:ListComponent},
  {path:"add",component: AddComponent},
  {path:"edit/:id",component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
