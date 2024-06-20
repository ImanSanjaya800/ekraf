import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterBioPageRoutingModule } from './register-bio-routing.module';

import { RegisterBioPage } from './register-bio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterBioPageRoutingModule
  ],
  declarations: [RegisterBioPage]
})
export class RegisterBioPageModule {}
