import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterBioPage } from './register-bio.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterBioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterBioPageRoutingModule {}
