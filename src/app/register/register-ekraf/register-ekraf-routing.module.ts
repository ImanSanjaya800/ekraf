import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEkrafPage } from './register-ekraf.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEkrafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEkrafPageRoutingModule {}
