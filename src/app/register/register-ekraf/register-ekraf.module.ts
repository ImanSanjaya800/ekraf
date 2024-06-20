import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEkrafPageRoutingModule } from './register-ekraf-routing.module';

import { RegisterEkrafPage } from './register-ekraf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEkrafPageRoutingModule
  ],
  declarations: [RegisterEkrafPage]
})
export class RegisterEkrafPageModule {}
